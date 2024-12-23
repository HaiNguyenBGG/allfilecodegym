class CarVariant {
    constructor(make, model, variant, year, type, engine, transmission, image, features) {
        this.make = make;
        this.model = model;
        this.variant = variant;
        this.year = year;
        this.type = type;
        this.engine = engine;
        this.transmission = transmission;
        this.image = image;
        this.features = features;
    }
}

const carVariants = [
    // Kia Morning
    new CarVariant('Kia', 'Morning', 'MT', 2024, 'Hatchback', '1.25L', 'Manual', 'assets/images/cars/morning-mt.jpg', ['Hệ thống an toàn', 'Sạc không dây', 'Apple CarPlay']),
    new CarVariant('Kia', 'Morning', 'AT', 2024, 'Hatchback', '1.25L', 'Automatic', 'assets/images/cars/morning-at.jpg', ['Hệ thống an toàn', 'Điều hòa tự động', 'Android Auto']),
    new CarVariant('Kia', 'Morning', 'X-Line', 2024, 'Hatchback', '1.25L', 'Automatic', 'assets/images/cars/morning-xline.jpg', ['Camera lùi', 'Apple CarPlay', 'Hệ thống an toàn']),
    new CarVariant('Kia', 'Morning', 'GT-Line', 2024, 'Hatchback', '1.25L', 'Automatic', 'assets/images/cars/morning-gtline.jpg', ['Chế độ lái thể thao', 'Hệ thống an toàn', 'Android Auto']),
    
    // Kia Soluto
    new CarVariant('Kia', 'Soluto', 'MT', 2024, 'Sedan', '1.4L', 'Manual', 'assets/images/cars/soluto-mt.jpg', ['Màn hình cảm ứng', 'Điều hòa tự động', 'Camera lùi']),
    new CarVariant('Kia', 'Soluto', 'AT', 2024, 'Sedan', '1.4L', 'Automatic', 'assets/images/cars/soluto-at.jpg', ['Apple CarPlay', 'Android Auto', 'Hệ thống an toàn']),
    
    // Kia Sonet
    new CarVariant('Kia', 'Sonet', 'Deluxe', 2024, 'SUV', '1.5L', 'Manual', 'assets/images/cars/sonet-deluxe.jpg', ['Camera lùi', 'Điều hòa tự động', 'Apple CarPlay']),
    new CarVariant('Kia', 'Sonet', 'Luxury', 2024, 'SUV', '1.5L', 'Automatic', 'assets/images/cars/sonet-luxury.jpg', ['Android Auto', 'Màn hình cảm ứng', 'Hệ thống an toàn']),
    
    // Kia K3
    new CarVariant('Kia', 'K3', 'MT', 2024, 'Sedan', '1.6L', 'Manual', 'assets/images/cars/k3-mt.jpg', ['Hệ thống an toàn', 'Điều hòa tự động', 'Apple CarPlay']),
    new CarVariant('Kia', 'K3', 'Premium', 2024, 'Sedan', '2.0L', 'Automatic', 'assets/images/cars/k3-premium.jpg', ['Android Auto', 'Màn hình cảm ứng', 'Hệ thống an toàn']),
    
    // Kia K5
    new CarVariant('Kia', 'K5', 'Luxury', 2024, 'Sedan', '2.0L', 'Automatic', 'assets/images/cars/k5-luxury.jpg', ['Camera 360', 'Điều hòa tự động', 'Apple CarPlay']),
    new CarVariant('Kia', 'K5', 'Premium', 2024, 'Sedan', '2.5L', 'Automatic', 'assets/images/cars/k5-premium.jpg', ['Android Auto', 'Hệ thống an toàn', 'Màn hình cảm ứng']),
    
    // Kia Sorento
    new CarVariant('Kia', 'Sorento', 'Luxury', 2024, 'SUV', '2.2L', 'Automatic', 'assets/images/cars/sorento-luxury.jpg', ['Apple CarPlay', 'Android Auto', 'Camera 360']),
    new CarVariant('Kia', 'Sorento', 'Signature', 2024, 'SUV', '2.5L', 'Automatic', 'assets/images/cars/sorento-signature.jpg', ['Hệ thống an toàn', 'Điều hòa tự động', '3 hàng ghế']),
    
    // Kia Carnival
    new CarVariant('Kia', 'Carnival', 'Premium', 2024, 'Minivan', '2.2L', 'Automatic', 'assets/images/cars/carnival-premium.jpg', ['Cửa trượt điện', 'Apple CarPlay', 'Ghế chỉnh điện']),
    new CarVariant('Kia', 'Carnival', 'Signature', 2024, 'Minivan', '2.5L', 'Automatic', 'assets/images/cars/carnival-signature.jpg', ['Hệ thống an toàn', 'Điều hòa tự động', 'Màn hình cảm ứng']),
];
