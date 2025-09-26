class Business {
  constructor({ businessId, ownerId, name, description, category, location, verified = false, createdAt, updatedAt }) {
    this.businessId = businessId;
    this.ownerId = ownerId;
    this.name = name;
    this.description = description;
    this.category = category;         // Salon, Tutor, Mechanic, etc.
    this.location = location;         // { lat, lng }
    this.verified = verified;
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || new Date();
  }

  toJSON() {
    return { ...this };
  }
}

export default Business;