cd /home/claude && zip -r secure-auth-app.zip secure-auth-app -x "*/node_modules/*" > /dev/null && mkdir -p /mnt/user-data/outputs && cp secure-auth-app.zip /mnt/user-data/outputs/ && find secure-auth-app -type f | sort
Output

secure-auth-app/README.md
secure-auth-app/backend/.env.example
secure-auth-app/backend/.gitignore
secure-auth-app/backend/config/db.js
secure-auth-app/backend/middleware/auth.js
secure-auth-app/backend/models/User.js
secure-auth-app/backend/package.json
secure-auth-app/backend/routes/auth.js
secure-auth-app/backend/routes/protected.js
secure-auth-app/backend/server.js
secure-auth-app/frontend/.env.example
secure-auth-app/frontend/.gitignore
secure-auth-app/frontend/package.json
secure-auth-app/frontend/public/index.html
secure-auth-app/frontend/src/App.js
secure-auth-app/frontend/src/api.js
secure-auth-app/frontend/src/components/Navbar.js
secure-auth-app/frontend/src/components/ProtectedRoute.js
secure-auth-app/frontend/src/context/AuthContext.js
secure-auth-app/frontend/src/index.css
secure-auth-app/frontend/src/index.js
secure-auth-app/frontend/src/pages/Dashboard.js
secure-auth-app/frontend/src/pages/Home.js
secure-auth-app/frontend/src/pages/Login.js
secure-auth-app/frontend/src/pages/Register.js
