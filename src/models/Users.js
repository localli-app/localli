class User {
  constructor({ userId, name, email, passwordHash, role = 'Customer', profilePicture = null, createdAt, updatedAt }) {
    this.userId = userId;
    this.name = name;
    this.email = email;
    this.role = role;                  // Customer | BusinessOwner | Admin
    this.profilePicture = profilePicture;
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || new Date();
  }

  toJSON() {
    return { ...this };
  }
}

module.exports = User;
