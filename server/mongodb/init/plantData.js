// Mapping dữ liệu chi tiết cho các loại cây trồng

const plantDatabase = {
    "Ca_Phe": {
        plantName: "Ca_Phe",
        plantNameVN: "Cà Phê",
        icon: "☕",
        description: "Cà phê là cây công nghiệp lâu năm, được trồng nhiều ở Tây Nguyên và các tỉnh miền núi phía Bắc. Cây cà phê có giá trị kinh tế cao và là một trong những cây xuất khẩu chủ lực của Việt Nam.",
        scientificName: "Coffea arabica / Coffea canephora",
        family: "Rubiaceae",
        commonNames: ["Cà phê", "Coffee"],
        growingRegions: ["Tây Nguyên", "Miền núi phía Bắc", "Đông Nam Bộ"],
        season: "Quanh năm",
        careTips: [
            "Tưới nước đều đặn, đặc biệt trong mùa khô",
            "Bón phân định kỳ với tỷ lệ NPK phù hợp",
            "Tỉa cành để tạo tán và tăng năng suất",
            "Phòng trừ sâu bệnh thường xuyên"
        ],
        commonDiseases: [
            "Bệnh rỉ sắt",
            "Bệnh đốm rong",
            "Bệnh phấn trắng",
            "Sâu vẽ bùa"
        ]
    },
    "Ca_Chua": {
        plantName: "Ca_Chua",
        plantNameVN: "Cà Chua",
        icon: "🍅",
        description: "Cà chua là loại rau quả phổ biến, giàu vitamin và chất chống oxy hóa. Được trồng rộng rãi ở nhiều vùng miền Việt Nam, đặc biệt là vùng đồng bằng và trung du.",
        scientificName: "Solanum lycopersicum",
        family: "Solanaceae",
        commonNames: ["Cà chua", "Tomato"],
        growingRegions: ["Đồng bằng sông Hồng", "Đồng bằng sông Cửu Long", "Trung du miền núi"],
        season: "Quanh năm (ưa mát)",
        careTips: [
            "Tưới nước đều đặn, tránh để đất quá khô hoặc quá ướt",
            "Bón phân hữu cơ và NPK cân đối",
            "Làm giàn để cây leo và phát triển tốt",
            "Kiểm tra sâu bệnh thường xuyên, đặc biệt là bệnh nấm lá"
        ],
        commonDiseases: [
            "Bệnh khảm lá",
            "Bệnh đốm vòng",
            "Bệnh đốm Septoria",
            "Bệnh nấm mốc"
        ]
    },
    "Ot": {
        plantName: "Ot",
        plantNameVN: "Ớt",
        icon: "🌶️",
        description: "Ớt là loại cây gia vị quan trọng trong ẩm thực Việt Nam. Có nhiều giống ớt khác nhau từ ớt ngọt đến ớt cay, được trồng phổ biến ở nhiều vùng miền.",
        scientificName: "Capsicum annuum",
        family: "Solanaceae",
        commonNames: ["Ớt", "Chili", "Pepper"],
        growingRegions: ["Toàn quốc", "Đặc biệt ở miền Nam"],
        season: "Quanh năm",
        careTips: [
            "Tưới nước đều đặn, tránh úng nước",
            "Bón phân NPK với tỷ lệ kali cao",
            "Tỉa cành để tăng năng suất",
            "Phòng trừ sâu bệnh, đặc biệt là bọ xít và rệp"
        ],
        commonDiseases: [
            "Bệnh xoăn lá",
            "Bệnh đốm lá",
            "Bệnh vàng lá",
            "Bệnh thán thư"
        ]
    },
    "Lua": {
        plantName: "Lua",
        plantNameVN: "Lúa",
        icon: "🌾",
        description: "Lúa là cây lương thực chính của Việt Nam, được trồng rộng rãi ở đồng bằng sông Hồng và đồng bằng sông Cửu Long. Lúa là nguồn cung cấp gạo chính cho người dân.",
        scientificName: "Oryza sativa",
        family: "Poaceae",
        commonNames: ["Lúa", "Rice"],
        growingRegions: ["Đồng bằng sông Hồng", "Đồng bằng sông Cửu Long", "Duyên hải miền Trung"],
        season: "2-3 vụ/năm",
        careTips: [
            "Quản lý nước tốt, giữ mực nước ổn định",
            "Bón phân NPK cân đối, đặc biệt chú ý kali",
            "Phòng trừ sâu bệnh kịp thời",
            "Sử dụng giống kháng bệnh"
        ],
        commonDiseases: [
            "Bệnh đạo ôn",
            "Bệnh đốm nâu",
            "Bệnh bạc lá",
            "Sâu đục thân"
        ]
    },
    "Ngo": {
        plantName: "Ngo",
        plantNameVN: "Ngô (Bắp)",
        icon: "🌽",
        description: "Ngô là cây lương thực quan trọng, được trồng phổ biến ở nhiều vùng miền Việt Nam. Ngô có thể dùng làm lương thực, thức ăn chăn nuôi và nguyên liệu công nghiệp.",
        scientificName: "Zea mays",
        family: "Poaceae",
        commonNames: ["Ngô", "Bắp", "Corn", "Maize"],
        growingRegions: ["Miền núi phía Bắc", "Tây Nguyên", "Đông Nam Bộ"],
        season: "2 vụ/năm (Xuân-Hè, Thu-Đông)",
        careTips: [
            "Tưới nước đều đặn, đặc biệt giai đoạn trổ cờ",
            "Bón phân NPK đầy đủ",
            "Làm cỏ và vun gốc",
            "Phòng trừ sâu bệnh, đặc biệt là sâu đục thân"
        ],
        commonDiseases: [
            "Bệnh cháy lá",
            "Bệnh đốm lá xám",
            "Bệnh gỉ sắt",
            "Bệnh cháy lá phía bắc"
        ]
    },
    "San": {
        plantName: "San",
        plantNameVN: "Sắn (Khoai mì)",
        icon: "🍠",
        description: "Sắn là cây lương thực và nguyên liệu công nghiệp quan trọng. Được trồng nhiều ở vùng đất đồi núi, sắn có khả năng chịu hạn tốt và thích nghi với nhiều loại đất.",
        scientificName: "Manihot esculenta",
        family: "Euphorbiaceae",
        commonNames: ["Sắn", "Khoai mì", "Cassava"],
        growingRegions: ["Miền núi phía Bắc", "Tây Nguyên", "Đông Nam Bộ"],
        season: "8-12 tháng",
        careTips: [
            "Trồng trên đất thoát nước tốt",
            "Bón phân lân và kali cao",
            "Làm cỏ định kỳ",
            "Phòng trừ sâu bệnh, đặc biệt là bệnh khảm lá"
        ],
        commonDiseases: [
            "Bệnh khảm lá",
            "Bệnh cháy lá vi khuẩn",
            "Bệnh vằn nâu",
            "Nhện đỏ"
        ]
    },
    "Che": {
        plantName: "Che",
        plantNameVN: "Chè (Trà)",
        icon: "🍃",
        description: "Chè là cây công nghiệp lâu năm, được trồng nhiều ở vùng núi phía Bắc và Tây Nguyên. Chè có giá trị kinh tế cao và là thức uống truyền thống của người Việt.",
        scientificName: "Camellia sinensis",
        family: "Theaceae",
        commonNames: ["Chè", "Trà", "Tea"],
        growingRegions: ["Miền núi phía Bắc", "Tây Nguyên", "Một số tỉnh miền Trung"],
        season: "Quanh năm (thu hoạch nhiều lần)",
        careTips: [
            "Tưới nước đều đặn, giữ độ ẩm đất ổn định",
            "Bón phân hữu cơ và NPK cân đối",
            "Tỉa cành và hái đúng kỹ thuật",
            "Phòng trừ sâu bệnh, đặc biệt là bọ xít muỗi"
        ],
        commonDiseases: [
            "Bệnh rỉ sắt đỏ",
            "Bệnh phồng lá",
            "Bệnh cháy nâu",
            "Bệnh cháy xám",
            "Bọ xít muỗi"
        ]
    },
    "Khoai_Tay": {
        plantName: "Khoai_Tay",
        plantNameVN: "Khoai Tây",
        icon: "🥔",
        description: "Khoai tây là loại củ quan trọng, được trồng nhiều ở vùng cao và vùng có khí hậu mát. Khoai tây giàu tinh bột và là nguồn lương thực quan trọng.",
        scientificName: "Solanum tuberosum",
        family: "Solanaceae",
        commonNames: ["Khoai tây", "Potato"],
        growingRegions: ["Vùng cao phía Bắc", "Tây Nguyên", "Một số tỉnh miền Trung"],
        season: "Vụ Đông-Xuân",
        careTips: [
            "Trồng trên đất tơi xốp, thoát nước tốt",
            "Bón phân hữu cơ và NPK cân đối",
            "Vun gốc để củ phát triển tốt",
            "Phòng trừ bệnh mốc sương và tuyến trùng"
        ],
        commonDiseases: [
            "Bệnh mốc sương",
            "Bệnh cháy lá sớm",
            "Tuyến trùng"
        ]
    }
};

/**
 * Lấy thông tin chi tiết về cây
 * @param {string} plantName - Tên mã cây (ví dụ: "Ca_Phe", "Ca_Chua")
 * @returns {Object} Thông tin chi tiết về cây
 */
function getPlantInfo(plantName) {
    // Tìm exact match trước
    if (plantDatabase[plantName]) {
        return plantDatabase[plantName];
    }
    
    // Tìm partial match (case-insensitive)
    const normalizedName = plantName.toLowerCase().trim();
    for (const key in plantDatabase) {
        if (key.toLowerCase() === normalizedName) {
            return plantDatabase[key];
        }
    }
    
    // Trả về default nếu không tìm thấy
    return {
        plantName: plantName,
        plantNameVN: plantName,
        icon: "🌱",
        description: "Thông tin về loại cây này đang được cập nhật.",
        scientificName: "Unknown",
        family: "Unknown",
        commonNames: [plantName],
        growingRegions: [],
        season: "Unknown",
        careTips: [],
        commonDiseases: []
    };
}

module.exports = {
    plantDatabase,
    getPlantInfo
};

