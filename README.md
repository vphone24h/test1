# 📱 iPhone Inventory Management System

> Hệ thống quản lý kho iPhone và điện thoại toàn diện

## 🎯 Tính năng chính

- ✅ **Quản lý kho hàng**: Nhập/xuất hàng, theo dõi IMEI
- ✅ **Quản lý chi nhánh**: Đa chi nhánh, phân quyền
- ✅ **Báo cáo tài chính**: Lợi nhuận, doanh thu theo thời gian
- ✅ **Quản lý công nợ**: Theo dõi khách hàng, thanh toán
- ✅ **Cảnh báo tồn kho**: Thông báo hàng sắp hết
- ✅ **Xuất Excel**: Báo cáo chi tiết

## 🛠️ Công nghệ sử dụng

### Frontend
- **React 19** + **Vite**
- **React Router** - Điều hướng
- **Chart.js** - Biểu đồ báo cáo
- **TailwindCSS** - Styling
- **Axios** - HTTP client

### Backend
- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **JWT** - Authentication
- **Bcrypt** - Mã hóa mật khẩu
- **Nodemailer** - Gửi email

### Database
- **MongoDB Atlas** - Cloud database

## 🚀 Cài đặt và chạy

### 1. Clone repository
```bash
git clone https://github.com/your-username/iphone-inventory.git
cd iphone-inventory
```

### 2. Setup Backend
```bash
cd backend
npm install

# Tạo file .env
cp .env.example .env
# Cấu hình MongoDB URI và các biến môi trường

# Chạy backend
npm start
```

### 3. Setup Frontend
```bash
cd ../iphone-inventory
npm install

# Tạo file .env
cp .env.example .env
# Cấu hình VITE_API_URL

# Chạy frontend
npm run dev
```

## 🌐 Deploy

### Option 1: Vercel + Render (Miễn phí)
- **Frontend**: Deploy lên Vercel
- **Backend**: Deploy lên Render

### Option 2: VPS
- **Ubuntu 22.04 LTS**
- **Nginx + PM2**
- **SSL với Let's Encrypt**

## 📝 Cấu hình môi trường

### Backend (.env)
```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your_jwt_secret
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
PORT=4000
```

### Frontend (.env)
```bash
VITE_API_URL=http://localhost:4000
```

## 🔧 Scripts

### Backend
```bash
npm start          # Chạy production
npm run dev        # Chạy development với nodemon
```

### Frontend
```bash
npm run dev        # Chạy development server
npm run build      # Build cho production
npm run preview    # Preview build
```

## 📊 Cấu trúc dự án

```
├── backend/           # Node.js API Server
│   ├── models/        # MongoDB Models
│   ├── routes/        # API Routes
│   ├── utils/         # Utilities
│   └── server.js      # Entry point
├── iphone-inventory/  # React Frontend
│   ├── src/
│   │   ├── pages/     # React Pages
│   │   ├── components/# React Components
│   │   └── App.jsx    # Main App
│   └── dist/          # Build output
└── README.md
```

## 👥 Quyền truy cập

- **Admin**: Toàn quyền quản lý
- **User**: Xem báo cáo, nhập/xuất hàng
- **Guest**: Chỉ xem

## 🤝 Đóng góp

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📞 Liên hệ

- **Email**: vphone24h@gmail.com
- **Website**: [Demo Live](https://chinhthuc-jade.vercel.app)

## 📄 License

MIT License - xem [LICENSE](LICENSE) để biết thêm chi tiết.

---

⭐ **Nếu dự án hữu ích, hãy cho một star nhé!** ⭐ 