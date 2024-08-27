const jwt = require('jsonwebtoken');

// Secret para JWT (use o mesmo segredo que usou para assinar o token)
const JWT_SECRET = 'your_jwt_secret_key';

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
    }

    try {
        // Verifica o token
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Adiciona o ID do usuário ao objeto req para uso nas próximas middlewares ou rotas
        next(); // Passa para a próxima middleware ou rota
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido.' });
    }
};

module.exports = authMiddleware;
