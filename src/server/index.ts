import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { marketRouter } from './routes/market';
import { customerRouter } from './routes/customer';
import { competitorRouter } from './routes/competitor';
import { productRouter } from './routes/product';
import { expansionRouter } from './routes/expansion';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
});

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/market', marketRouter);
app.use('/api/customer', customerRouter);
app.use('/api/competitor', competitorRouter);
app.use('/api/product', productRouter);
app.use('/api/expansion', expansionRouter);

// WebSocket events
io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('subscribe_market_updates', (marketId) => {
    socket.join(`market_${marketId}`);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const port = process.env.PORT || 3001;

httpServer.listen(port, () => {
  console.log(`Server running on port ${port}`);
});