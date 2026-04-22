import express from 'express';
import mysql from 'mysql2';
import multer from 'multer'; 
import nodemailer from "nodemailer"; 
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json())
app.use("/uploads", express.static("uploads"))

// Configure MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'u612437791_app',
    password: 'Ay@d#j!123',
    database: 'u612437791_toogood'
});

// Configure file upload storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });

const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465, 
    secure: true,
    auth: {
        user: "noreply@travel.donadextechnology.com", 
        pass: "AdminS@0509",
    },
});

app.post("/application", upload.fields([
    { name: "data_page", maxCount: 1 },
    { name: "passport_photograph", maxCount: 1 },
    { name: "utility_bill", maxCount: 1 },
    { name: "supporting_document", maxCount: 1 },
    { name: "other_document", maxCount: 1 }
]), async (req, res) => {
    try {
        const { first_name, middle_name, last_name, phone_number, contact_email, date_of_birth, passport_number, visa_destination, visa_fee, process_time, process_type } = req.body;

        if (!first_name || !last_name || !phone_number || !contact_email || !passport_number) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Auto-generate tracking ID
        const tracking_id = `VISA${Math.floor(Math.random() * 1000000000)}`;

        // Store file paths
        const data_page = req.files["data_page"] ? req.files["data_page"][0].filename : null;
        const passport_photograph = req.files["passport_photograph"] ? req.files["passport_photograph"][0].filename : null;
        const utility_bill = req.files["utility_bill"] ? req.files["utility_bill"][0].filename : null;
        const supporting_document = req.files["supporting_document"] ? req.files["supporting_document"][0].filename : null;
        const other_document = req.files["other_document"] ? req.files["other_document"][0].filename : null;

        const sql = `
            INSERT INTO visa_applications (
                first_name, middle_name, last_name, phone_number, contact_email, date_of_birth, 
                passport_number, data_page, passport_photograph, utility_bill, supporting_document, 
                other_document, tracking_id, payment_status, visa_status, visa_destination, visa_fee, process_time, process_type
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'Not Paid', 'Pending', ?, ?, ?, ?)`;

        const values = [
            first_name, middle_name, last_name, phone_number, contact_email, date_of_birth, passport_number,
            data_page, passport_photograph, utility_bill, supporting_document, other_document, tracking_id, visa_destination, visa_fee, process_time, process_type
        ];

        db.query(sql, values, (err) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ message: "Database error" });
            }

            // Email content
            const mailOptions = {
                from: '"Donadex Travels & Tours" <noreply@travel.donadextravels.com>',
                to: contact_email, 
                cc:"visa@travel.donadextechnology.com",
                subject: "Visa Application Submitted Successfully",
                html: `
                    <div style="padding: 20px; font-family: Arial, sans-serif; background-color: #f8f8f8; border-radius: 5px;">
                        <h2 style="color: #333;">Dear ${first_name} ${last_name},</h2>
                        <p style="color: #555;">Thank you for submitting your visa application.</p>

                        <div style="background-color: #fff; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
                            <h3 style="color: #333;">Application Details:</h3>
                            <ul style="padding-left: 20px;">
                                <li><strong>Full Name:</strong> ${first_name} ${middle_name} ${last_name}</li>
                                <li><strong>Phone Number:</strong> ${phone_number}</li>
                                <li><strong>Email:</strong> ${contact_email}</li>
                                <li><strong>Passport Number:</strong> ${passport_number}</li>
                                <li><strong>Destination:</strong> ${visa_destination}</li>
                                <li><strong>Travel Type:</strong> ${tracking_id}</li>
                                <li><strong>Processing Fee:</strong> ${visa_fee}</li>
                                <li><strong>Process Time:</strong> ${process_time}</li>
                                <li><strong>Process Type:</strong> ${process_type}</li>
                                <li><strong>Passport Data Page:</strong> <a href="https://travel.donadextechnology.com/uploads/${data_page}"">Download/View</a></li>
                            </ul>
                        </div>

                        <p style="color: #555; margin-top: 20px;">We will review your application and get back to you soon.</p>
                        <p style="color: #333; margin-bottom: 0"><strong>Best regards,</strong></p>
                        <p style="color: #333;"><strong>Donadex Travels</strong></p>
                    </div>
                `,
            };

            // Send email inside the callback function
            transporter.sendMail(mailOptions, (emailError, info) => {
                if (emailError) {
                    console.error("Email sending error:", emailError);
                } else {
                    console.log("Email sent successfully:", info.response);
                }
            });

            res.json({ success: "Visa application submitted successfully", tracking_id });
        });

    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ message: "Server error" });
    }
});


app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});