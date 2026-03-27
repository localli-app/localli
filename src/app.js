import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import { db } from './config/firebase.js';
import bookingRoutes from './routes/bookingRoutes.js';
import businessRoutes from './routes/businessRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(morgan("dev"));

// Mounting Routes
app.use('/api/users', userRoutes);
app.use('/api/businesses', businessRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/reviews', reviewRoutes);


// Endpoint to test Firestore connection. TODO: Remove in production
app.get("/test-db", async (req, res) => {
  console.log("Request headers:", req.headers);
  console.log("Request body:", req.body);

  try {
    const docRef = db.collection("test").doc("ping");
    await docRef.set({ timestamp: new Date().toISOString() });

    const doc = await docRef.get();
    res.json({ message: "Firestore connected!", data: doc.data() });
  } catch (error) {
    console.error("Firestore test error:", error);
    res.status(500).json({ error: "Firestore connection failed" });
  }
});


export default app;