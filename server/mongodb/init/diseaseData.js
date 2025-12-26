// Mapping dữ liệu chi tiết cho các bệnh cây trồng

const diseaseDatabase = {
    // Tomato Early Blight
    "Tomato___Early_blight": {
        diseaseName: "Bệnh cháy lá sớm ở cà chua",
        possibleProblems: ["Nhiễm nấm", "Lưu thông không khí kém", "Độ ẩm quá mức"],
        symptoms: "Các đốm nâu sẫm trên lá phía dưới\nQuầng vàng xung quanh vết thương\nRụng lá bắt đầu từ phía dưới\nVết thương có vòng đồng tâm",
        causes: "Nấm Alternaria solani\nĐiều kiện ẩm ướt\nNhiệt độ 24-29°C",
        treatment: [
            {
                title: "🔬 Sử dụng thuốc diệt nấm",
                subtitle: "Lựa chọn 1: Thuốc diệt nấm hữu cơ",
                steps: [
                    "Bước 1: Chuẩn bị thuốc diệt nấm gốc đồng",
                    "Pha theo hướng dẫn của nhà sản xuất",
                    "Phun vào sáng sớm",
                    "Lặp lại mỗi 7-10 ngày",
                    "🌱 Mẹo: Bắt đầu điều trị ngay khi có dấu hiệu đầu tiên của bệnh"
                ]
            },
            {
                title: "✂️ Loại bỏ lá bị nhiễm",
                subtitle: null,
                steps: [
                    "Loại bỏ tất cả lá bị nhiễm ngay lập tức",
                    "Vứt bỏ chúng xa khỏi vườn",
                    "Khử trùng dụng cụ sau mỗi lần cắt",
                    "🌱 Mẹo: Ngăn chặn lây lan bằng cách loại bỏ các phần bị ảnh hưởng sớm"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Cải thiện lưu thông không khí",
                steps: [
                    "Trồng cây với khoảng cách phù hợp (18-24 inch)",
                    "Tỉa lá phía dưới để cải thiện luồng không khí",
                    "Tưới nước ở gốc, tránh làm ướt lá",
                    "Phủ lớp phủ xung quanh cây để ngăn đất bắn lên"
                ]
            },
            {
                title: "Điều chỉnh lịch tưới nước",
                steps: [
                    "Tưới nước vào buổi sáng",
                    "Để đất khô giữa các lần tưới",
                    "Sử dụng hệ thống tưới nhỏ giọt nếu có thể",
                    "Tưới nước 2-3 lần mỗi tuần tùy theo thời tiết"
                ]
            }
        ]
    },

    // Tomato Late Blight
    "Tomato___Late_blight": {
        diseaseName: "Bệnh cháy lá muộn ở cà chua",
        possibleProblems: ["Nấm Phytophthora infestans", "Độ ẩm cao", "Nhiệt độ mát"],
        symptoms: "Vết thương lớn, sẫm màu, ngấm nước\nTăng trưởng trắng mờ trên mặt dưới lá\nLá chết nhanh\nVết thương sẫm trên thân và quả",
        causes: "Phytophthora infestans\nĐộ ẩm cao (90%+)\nNhiệt độ mát (15-24°C)\nĐiều kiện ẩm ướt",
        treatment: [
            {
                title: "🔬 Sử dụng thuốc diệt nấm",
                subtitle: "Lựa chọn 1: Thuốc diệt nấm hệ thống",
                steps: [
                    "Sử dụng chlorothalonil hoặc mancozeb",
                    "Phun phòng ngừa",
                    "Tuân theo hướng dẫn trên nhãn cẩn thận",
                    "Phun mỗi 7 ngày trong thời tiết ẩm ướt",
                    "🌱 Mẹo: Bắt đầu trước khi bệnh xuất hiện trong khu vực của bạn"
                ]
            },
            {
                title: "✂️ Loại bỏ cây bị nhiễm",
                subtitle: null,
                steps: [
                    "Loại bỏ và tiêu hủy tất cả cây bị nhiễm ngay lập tức",
                    "Không ủ phân từ vật liệu bị nhiễm",
                    "Làm sạch tất cả dụng cụ và thiết bị",
                    "🌱 Mẹo: Hành động nhanh chóng - bệnh cháy lá muộn lây lan rất nhanh"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Ngăn chặn bùng phát trong tương lai",
                steps: [
                    "Sử dụng giống kháng bệnh",
                    "Luân canh cây trồng hàng năm",
                    "Cải thiện hệ thống thoát nước",
                    "Theo dõi dự báo thời tiết cho các điều kiện thuận lợi cho bệnh"
                ]
            }
        ]
    },

    // Tomato Bacterial Spot
    "Tomato___Bacterial_spot": {
        diseaseName: "Bệnh đốm vi khuẩn ở cà chua",
        possibleProblems: ["Nhiễm vi khuẩn", "Lá ướt", "Nhiệt độ ấm"],
        symptoms: "Các đốm nhỏ, sẫm màu, ngấm nước trên lá\nĐốm trở nên nổi lên và giống như vảy\nQuầng vàng xung quanh đốm\nRụng lá và rụng lá",
        causes: "Vi khuẩn Xanthomonas\nNhiễm trùng từ hạt giống\nNước bắn tung tóe\nĐiều kiện ấm, ẩm ướt",
        treatment: [
            {
                title: "🔬 Sử dụng thuốc diệt khuẩn gốc đồng",
                subtitle: "Lựa chọn 1: Thuốc diệt nấm đồng",
                steps: [
                    "Phun các sản phẩm gốc đồng",
                    "Bắt đầu điều trị sớm",
                    "Phun mỗi 7-10 ngày",
                    "Trộn với mancozeb để kiểm soát tốt hơn",
                    "🌱 Mẹo: Đồng giúp ngăn ngừa nhưng có thể không chữa khỏi"
                ]
            },
            {
                title: "✂️ Tỉa các khu vực bị ảnh hưởng",
                subtitle: null,
                steps: [
                    "Loại bỏ lá bị nhiễm nặng",
                    "Tỉa để cải thiện lưu thông không khí",
                    "Khử trùng dụng cụ giữa các lần cắt",
                    "🌱 Mẹo: Loại bỏ lá phía dưới chạm vào đất"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Quản lý nước tưới",
                steps: [
                    "Chỉ tưới nước ở gốc cây",
                    "Tránh tưới từ trên cao",
                    "Tưới nước vào sáng sớm",
                    "Giữ lá khô"
                ]
            }
        ]
    },

    // Tomato Leaf Mold
    "Tomato___Leaf_Mold": {
        diseaseName: "Bệnh nấm lá ở cà chua",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Lưu thông không khí kém"],
        symptoms: "Các đốm vàng trên mặt trên lá\nLớp phủ xám hoặc nâu trên mặt dưới lá\nLá héo và rụng\nThường xảy ra trong nhà kính hoặc nơi kín",
        causes: "Nấm Passalora fulva\nĐộ ẩm cao (85%+)\nNhiệt độ ẩm 21-24°C\nThiếu lưu thông không khí",
        treatment: [
            {
                title: "🔬 Sử dụng thuốc diệt nấm",
                subtitle: "Lựa chọn 1: Thuốc diệt nấm gốc đồng",
                steps: [
                    "Phun thuốc diệt nấm theo hướng dẫn",
                    "Phun vào sáng sớm",
                    "Lặp lại mỗi 7-10 ngày",
                    "🌱 Mẹo: Phun cả mặt trên và mặt dưới lá"
                ]
            },
            {
                title: "✂️ Loại bỏ lá bị nhiễm",
                subtitle: null,
                steps: [
                    "Loại bỏ lá bị nhiễm ngay lập tức",
                    "Tỉa để cải thiện lưu thông không khí",
                    "Khử trùng dụng cụ sau mỗi lần sử dụng"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Cải thiện môi trường",
                steps: [
                    "Giảm độ ẩm xuống dưới 80%",
                    "Tăng lưu thông không khí",
                    "Tưới nước ở gốc, tránh làm ướt lá",
                    "Giữ khoảng cách giữa các cây"
                ]
            }
        ]
    },

    // Tomato Septoria Leaf Spot
    "Tomato___Septoria_leaf_spot": {
        diseaseName: "Bệnh đốm lá Septoria ở cà chua",
        possibleProblems: ["Nhiễm nấm", "Lá ướt", "Độ ẩm cao"],
        symptoms: "Các đốm nhỏ, tròn, nâu sẫm\nQuầng vàng xung quanh đốm\nĐốm có chấm đen ở giữa\nRụng lá từ phía dưới",
        causes: "Nấm Septoria lycopersici\nNhiệt độ 20-27°C\nĐộ ẩm cao trên 90%\nNước bắn lên lá từ đất",
        treatment: [
            {
                title: "🔬 Sử dụng thuốc diệt nấm",
                subtitle: "Lựa chọn 1: Chlorothalonil hoặc mancozeb",
                steps: [
                    "Phun thuốc diệt nấm",
                    "Bắt đầu điều trị sớm",
                    "Lặp lại mỗi 7-14 ngày",
                    "Phun vào sáng sớm"
                ]
            },
            {
                title: "✂️ Loại bỏ lá bị nhiễm",
                subtitle: null,
                steps: [
                    "Loại bỏ lá bị nhiễm nặng",
                    "Vứt bỏ xa khỏi vườn",
                    "Khử trùng dụng cụ"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Ngăn ngừa lây lan",
                steps: [
                    "Tưới nước ở gốc, tránh làm ướt lá",
                    "Phủ lớp phủ để ngăn đất bắn lên",
                    "Cải thiện lưu thông không khí",
                    "Trồng cây với khoảng cách phù hợp"
                ]
            }
        ]
    },

    // Tomato Spider Mites
    "Tomato___Spider_mites Two-spotted_spider_mite": {
        diseaseName: "Bệnh nhện đỏ (nhện hai chấm) ở cà chua",
        possibleProblems: ["Sâu hại", "Không khí khô", "Thiếu thiên địch"],
        symptoms: "Lá phía dưới có đốm vàng nhỏ\nXuất hiện mạng nhện mỏng\nLá chuyển vàng và héo\nLá rụng sớm",
        causes: "Nhện đỏ Tetranychus urticae\nThời tiết khô nóng\nThiếu thiên địch tự nhiên\nMật độ cây trồng cao",
        treatment: [
            {
                title: "🐛 Kiểm soát bằng thiên địch",
                subtitle: "Lựa chọn 1: Thiên địch tự nhiên",
                steps: [
                    "Thả bọ rùa hoặc nhện ăn thịt",
                    "Sử dụng các loài thiên địch hiệu quả",
                    "Tránh dùng thuốc trừ sâu mạnh",
                    "🌱 Mẹo: Thiên địch là giải pháp lâu dài và an toàn"
                ]
            },
            {
                title: "🧪 Sử dụng thuốc hữu cơ",
                subtitle: null,
                steps: [
                    "Xịt nước xà phòng loãng",
                    "Hoặc dầu neem",
                    "Phun vào mặt dưới lá nơi nhện ẩn náu",
                    "Lặp lại mỗi 3-5 ngày"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Tăng độ ẩm",
                steps: [
                    "Tăng độ ẩm môi trường",
                    "Phun nước sương vào buổi sáng",
                    "Tránh để cây bị khô",
                    "Tưới nước đều đặn"
                ]
            }
        ]
    },

    // Tomato Target Spot
    "Tomato___Target_Spot": {
        diseaseName: "Bệnh đốm mục tiêu ở cà chua",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Nhiệt độ ấm"],
        symptoms: "Đốm tròn với vòng tròn đồng tâm\nĐốm nâu sẫm với viền vàng\nLá héo và rụng\nCó thể ảnh hưởng đến quả",
        causes: "Nấm Corynespora cassiicola\nNhiệt độ 24-30°C\nĐộ ẩm cao\nĐiều kiện ẩm ướt kéo dài",
        treatment: [
            {
                title: "🔬 Sử dụng thuốc diệt nấm",
                subtitle: "Lựa chọn 1: Mancozeb hoặc chlorothalonil",
                steps: [
                    "Phun thuốc diệt nấm",
                    "Bắt đầu điều trị sớm",
                    "Lặp lại mỗi 7-10 ngày",
                    "Phun vào sáng sớm"
                ]
            },
            {
                title: "✂️ Loại bỏ lá bị nhiễm",
                subtitle: null,
                steps: [
                    "Loại bỏ lá bị nhiễm",
                    "Tỉa để cải thiện lưu thông",
                    "Vứt bỏ xa khỏi vườn"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Cải thiện điều kiện",
                steps: [
                    "Giảm độ ẩm",
                    "Cải thiện lưu thông không khí",
                    "Tưới nước ở gốc",
                    "Tránh làm ướt lá"
                ]
            }
        ]
    },

    // Tomato Mosaic Virus
    "Tomato___Tomato_mosaic_virus": {
        diseaseName: "Bệnh virus khảm ở cà chua",
        possibleProblems: ["Virus", "Côn trùng trung gian", "Lây lan qua cơ giới"],
        symptoms: "Lá có mô hình khảm xanh-vàng\nLá nhăn và cong\nCây còi cọc, phát triển chậm\nQuả nhỏ và biến dạng",
        causes: "Virus TMV hoặc CMV\nLây lan qua tiếp xúc\nCôn trùng như rệp\nVật liệu trồng trọt nhiễm bệnh",
        treatment: [
            {
                title: "❌ Loại bỏ cây bị nhiễm",
                subtitle: "Lựa chọn 1: Tiêu hủy ngay",
                steps: [
                    "Loại bỏ và tiêu hủy cây bị nhiễm ngay lập tức",
                    "Không ủ phân",
                    "Làm sạch tất cả dụng cụ",
                    "🌱 Mẹo: Virus không có thuốc chữa, chỉ phòng ngừa"
                ]
            },
            {
                title: "🛡️ Ngăn chặn lây lan",
                subtitle: null,
                steps: [
                    "Rửa tay trước khi chạm vào cây",
                    "Khử trùng dụng cụ",
                    "Kiểm soát côn trùng",
                    "Sử dụng giống kháng virus"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Phòng ngừa",
                steps: [
                    "Sử dụng hạt giống không nhiễm bệnh",
                    "Tránh hút thuốc gần cây",
                    "Kiểm soát côn trùng trung gian",
                    "Luân canh cây trồng"
                ]
            }
        ]
    },

    // Tomato Yellow Leaf Curl Virus
    "Tomato___Tomato_Yellow_Leaf_Curl_Virus": {
        diseaseName: "Bệnh virus vàng lá cuốn ở cà chua",
        possibleProblems: ["Virus", "Bọ phấn trắng", "Không có thuốc chữa"],
        symptoms: "Lá cuốn lên trên\nMàu vàng dọc theo mép lá\nCây còi cọc, nhỏ\nQuả ít hoặc không có",
        causes: "Virus TYLCV\nBọ phấn trắng Bemisia tabaci\nKhông có thuốc chữa\nLây lan nhanh",
        treatment: [
            {
                title: "❌ Loại bỏ cây bị nhiễm",
                subtitle: "Lựa chọn 1: Tiêu hủy ngay",
                steps: [
                    "Loại bỏ cây bị nhiễm ngay lập tức",
                    "Không ủ phân",
                    "Làm sạch dụng cụ",
                    "🌱 Mẹo: Không có thuốc chữa virus"
                ]
            },
            {
                title: "🛡️ Kiểm soát bọ phấn",
                subtitle: null,
                steps: [
                    "Sử dụng bẫy vàng",
                    "Kiểm soát bọ phấn trắng",
                    "Dùng thuốc hữu cơ",
                    "Thả thiên địch"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Phòng ngừa",
                steps: [
                    "Sử dụng giống kháng virus",
                    "Kiểm soát bọ phấn trắng",
                    "Phủ lưới chống côn trùng",
                    "Trồng sớm để tránh mùa cao điểm"
                ]
            }
        ]
    },

    // Tomato Healthy
    "Tomato___healthy": {
        diseaseName: "Cà chua khỏe mạnh",
        possibleProblems: [],
        symptoms: "Lá xanh tốt, không có đốm hoặc triệu chứng bất thường\nCây phát triển bình thường\nQuả phát triển tốt",
        causes: "Cây trồng khỏe mạnh, không nhiễm bệnh",
        treatment: [
            {
                title: "🌱 Duy trì sức khỏe cây",
                subtitle: "Tiếp tục chăm sóc tốt",
                steps: [
                    "Tiếp tục tưới nước đều đặn",
                    "Bón phân định kỳ",
                    "Kiểm tra sâu bệnh thường xuyên",
                    "🌱 Mẹo: Phòng bệnh tốt hơn chữa bệnh"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Chăm sóc phòng ngừa",
                steps: [
                    "Tưới nước đúng cách",
                    "Bón phân cân đối",
                    "Kiểm tra cây thường xuyên",
                    "Giữ vệ sinh vườn"
                ]
            }
        ]
    },

    // Chili Bacterial Spot
    "Chili__Bacterial_Spot": {
        diseaseName: "Bệnh đốm vi khuẩn ở ớt",
        possibleProblems: ["Nhiễm vi khuẩn", "Lá ướt", "Nhiệt độ ấm"],
        symptoms: "Đốm nhỏ, ngấm nước trên lá\nĐốm trở nên nâu sẫm\nLá rụng sớm\nCó thể ảnh hưởng đến quả",
        causes: "Vi khuẩn Xanthomonas\nĐiều kiện ẩm ướt\nNhiệt độ 20-30°C\nNước bắn lên lá",
        treatment: [
            {
                title: "🔬 Sử dụng thuốc gốc đồng",
                subtitle: "Lựa chọn 1: Cuproxat hoặc Kocide",
                steps: [
                    "Phun thuốc gốc đồng",
                    "Bắt đầu điều trị sớm",
                    "Lặp lại mỗi 7-10 ngày",
                    "🌱 Mẹo: Đồng giúp ngăn chặn lây lan"
                ]
            },
            {
                title: "✂️ Loại bỏ lá bị nhiễm",
                subtitle: null,
                steps: [
                    "Loại bỏ lá bị nhiễm",
                    "Tỉa để cải thiện lưu thông",
                    "Khử trùng dụng cụ"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Quản lý nước",
                steps: [
                    "Tưới nước ở gốc",
                    "Tránh làm ướt lá",
                    "Tưới vào buổi sáng",
                    "Cải thiện thoát nước"
                ]
            }
        ]
    },

    // Chili Cercospora Leaf Spot
    "Chili__Cercospora_Leaf_Spot": {
        diseaseName: "Bệnh đốm lá Cercospora ở ớt",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Lưu thông không khí kém"],
        symptoms: "Đốm tròn với tâm xám\nViền nâu hoặc tím\nLá vàng và rụng\nLàm giảm năng suất",
        causes: "Nấm Cercospora capsici\nĐộ ẩm cao\nNhiệt độ ấm\nLưu thông không khí kém",
        treatment: [
            {
                title: "🔬 Sử dụng thuốc diệt nấm",
                subtitle: "Lựa chọn 1: Chlorothalonil",
                steps: [
                    "Phun thuốc diệt nấm",
                    "Bắt đầu điều trị sớm",
                    "Lặp lại mỗi 7-10 ngày",
                    "Phun vào sáng sớm"
                ]
            },
            {
                title: "✂️ Loại bỏ lá bị nhiễm",
                subtitle: null,
                steps: [
                    "Loại bỏ lá bị nhiễm nặng",
                    "Tỉa để cải thiện lưu thông",
                    "Vứt bỏ xa khỏi vườn"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Cải thiện môi trường",
                steps: [
                    "Giảm độ ẩm",
                    "Tăng lưu thông không khí",
                    "Tưới nước ở gốc",
                    "Giữ khoảng cách cây phù hợp"
                ]
            }
        ]
    },

    // Chili Curl Virus
    "Chili__Curl_Virus": {
        diseaseName: "Bệnh virus cuốn lá ở ớt",
        possibleProblems: ["Virus", "Bọ phấn trắng", "Không có thuốc chữa"],
        symptoms: "Lá cuốn và nhăn\nMàu vàng\nCây còi cọc\nQuả ít hoặc biến dạng",
        causes: "Virus gây bệnh cuốn lá\nBọ phấn trắng\nLây lan nhanh\nKhông có thuốc chữa",
        treatment: [
            {
                title: "❌ Loại bỏ cây bị nhiễm",
                subtitle: "Lựa chọn 1: Tiêu hủy ngay",
                steps: [
                    "Loại bỏ và tiêu hủy cây bị nhiễm",
                    "Không ủ phân",
                    "Làm sạch dụng cụ",
                    "🌱 Mẹo: Virus không thể chữa"
                ]
            },
            {
                title: "🛡️ Kiểm soát vector",
                subtitle: null,
                steps: [
                    "Kiểm soát bọ phấn trắng",
                    "Sử dụng bẫy vàng",
                    "Phủ lưới chống côn trùng",
                    "Dùng thuốc hữu cơ"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Phòng ngừa",
                steps: [
                    "Sử dụng giống kháng",
                    "Kiểm soát côn trùng",
                    "Trồng sớm",
                    "Vệ sinh vườn tốt"
                ]
            }
        ]
    },

    // Chili Healthy Leaf
    "Chili__Healthy_Leaf": {
        diseaseName: "Ớt khỏe mạnh",
        possibleProblems: [],
        symptoms: "Lá xanh tốt, không có triệu chứng bất thường\nCây phát triển bình thường\nQuả phát triển khỏe mạnh",
        causes: "Cây ớt khỏe mạnh, không nhiễm bệnh",
        treatment: [
            {
                title: "🌱 Duy trì sức khỏe",
                subtitle: "Tiếp tục chăm sóc",
                steps: [
                    "Tiếp tục chăm sóc tốt",
                    "Bón phân đầy đủ",
                    "Kiểm tra thường xuyên",
                    "🌱 Mẹo: Phòng bệnh tốt hơn chữa"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Chăm sóc phòng ngừa",
                steps: [
                    "Tưới nước đều đặn",
                    "Bón phân cân đối",
                    "Kiểm tra sâu bệnh",
                    "Vệ sinh vườn"
                ]
            }
        ]
    },

    // Chili Nutrition Deficiency
    "Chili__Nutrition_Deficiency": {
        diseaseName: "Thiếu dinh dưỡng ở ớt",
        possibleProblems: ["Thiếu nitơ", "Thiếu photpho", "Thiếu kali"],
        symptoms: "Lá vàng, chuyển màu bất thường\nCây còi cọc\nQuả kém phát triển\nGiảm năng suất",
        causes: "Thiếu chất dinh dưỡng\nĐất nghèo dinh dưỡng\npH không phù hợp\nBón phân không đủ",
        treatment: [
            {
                title: "🌿 Bón phân bổ sung",
                subtitle: "Lựa chọn 1: Phân NPK cân đối",
                steps: [
                    "Bón phân NPK 20-20-20",
                    "Bón theo hướng dẫn",
                    "Bón đều đặn trong mùa vụ",
                    "🌱 Mẹo: Kiểm tra pH đất trước"
                ]
            },
            {
                title: "🔬 Phân tích đất",
                subtitle: null,
                steps: [
                    "Làm xét nghiệm đất",
                    "Bổ sung chất còn thiếu",
                    "Điều chỉnh pH",
                    "Bón phân hữu cơ"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Chăm sóc dinh dưỡng",
                steps: [
                    "Bón phân đều đặn",
                    "Sử dụng phân hữu cơ",
                    "Kiểm tra pH định kỳ",
                    "Bổ sung vi lượng nếu cần"
                ]
            }
        ]
    },

    // Chili White Spot
    "Chili__White_spot": {
        diseaseName: "Bệnh đốm trắng ở ớt",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Lưu thông không khí kém"],
        symptoms: "Đốm trắng hoặc xám trên lá\nLá vàng và rụng\nGiảm quang hợp\nCây suy yếu",
        causes: "Nấm gây bệnh\nĐộ ẩm cao\nNhiệt độ mát\nLưu thông không khí kém",
        treatment: [
            {
                title: "🔬 Sử dụng thuốc diệt nấm",
                subtitle: "Lựa chọn 1: Copper-based fungicide",
                steps: [
                    "Phun thuốc diệt nấm",
                    "Bắt đầu điều trị sớm",
                    "Lặp lại mỗi 7-10 ngày",
                    "Phun đều toàn bộ cây"
                ]
            },
            {
                title: "✂️ Loại bỏ lá bị nhiễm",
                subtitle: null,
                steps: [
                    "Loại bỏ lá bị nhiễm nặng",
                    "Tỉa để cải thiện lưu thông",
                    "Khử trùng dụng cụ"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Cải thiện điều kiện",
                steps: [
                    "Giảm độ ẩm",
                    "Tăng lưu thông không khí",
                    "Tưới nước ở gốc",
                    "Tránh làm ướt lá"
                ]
            }
        ]
    },

    // Corn Cercospora Leaf Spot / Gray Leaf Spot
    "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": {
        diseaseName: "Bệnh đốm lá xám ở ngô",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Nhiệt độ ấm"],
        symptoms: "Đốm hình chữ nhật, xám trên lá\nĐốm có viền nâu đỏ\nLá chuyển vàng và khô\nGiảm năng suất đáng kể",
        causes: "Nấm Cercospora zeae-maydis\nNhiệt độ 25-30°C\nĐộ ẩm cao\nLưu thông không khí kém",
        treatment: [
            {
                title: "🔬 Sử dụng thuốc diệt nấm",
                subtitle: "Lựa chọn 1: Azoxystrobin hoặc propiconazole",
                steps: [
                    "Phun thuốc diệt nấm khi phát hiện sớm",
                    "Phun vào giai đoạn lá cờ",
                    "Lặp lại mỗi 10-14 ngày",
                    "🌱 Mẹo: Phun phòng ngừa trước khi bệnh xuất hiện"
                ]
            },
            {
                title: "✂️ Loại bỏ lá bị nhiễm",
                subtitle: null,
                steps: [
                    "Loại bỏ lá bị nhiễm nặng ở giai đoạn sớm",
                    "Vứt bỏ xa khỏi ruộng",
                    "Khử trùng dụng cụ"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Quản lý canh tác",
                steps: [
                    "Luân canh cây trồng",
                    "Sử dụng giống kháng bệnh",
                    "Cải thiện lưu thông không khí",
                    "Quản lý độ ẩm tốt"
                ]
            }
        ]
    },

    // Corn Common Rust
    "Corn_(maize)___Common_rust_": {
        diseaseName: "Bệnh gỉ sắt thường ở ngô",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Nhiệt độ mát"],
        symptoms: "Đốm nhỏ màu nâu đỏ trên lá\nĐốm phát triển thành vết lớn\nBột màu nâu đỏ (bào tử)\nLá khô và chết",
        causes: "Nấm Puccinia sorghi\nNhiệt độ 16-25°C\nĐộ ẩm cao\nSương mù buổi sáng",
        treatment: [
            {
                title: "🔬 Sử dụng thuốc diệt nấm",
                subtitle: "Lựa chọn 1: Triazole hoặc strobilurin",
                steps: [
                    "Phun thuốc diệt nấm khi phát hiện sớm",
                    "Phun vào giai đoạn lá cờ",
                    "Lặp lại mỗi 10-14 ngày",
                    "🌱 Mẹo: Điều trị sớm quan trọng"
                ]
            },
            {
                title: "🌾 Sử dụng giống kháng",
                subtitle: null,
                steps: [
                    "Chọn giống kháng bệnh cho vụ sau",
                    "Luân canh cây trồng",
                    "Tránh trồng quá dày"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Phòng ngừa",
                steps: [
                    "Sử dụng giống kháng bệnh",
                    "Trồng đúng thời vụ",
                    "Quản lý độ ẩm",
                    "Bón phân cân đối"
                ]
            }
        ]
    },

    // Corn Northern Leaf Blight
    "Corn_(maize)___Northern_Leaf_Blight": {
        diseaseName: "Bệnh cháy lá phía bắc ở ngô",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Nhiệt độ mát"],
        symptoms: "Vết thương hình thoi, xám xanh\nVết thương lớn dần, nâu sẫm\nLá chết từ dưới lên\nGiảm năng suất nghiêm trọng",
        causes: "Nấm Exserohilum turcicum\nNhiệt độ 18-27°C\nĐộ ẩm cao\nThời tiết ẩm ướt kéo dài",
        treatment: [
            {
                title: "🔬 Sử dụng thuốc diệt nấm",
                subtitle: "Lựa chọn 1: Azoxystrobin hoặc pyraclostrobin",
                steps: [
                    "Phun thuốc diệt nấm phòng ngừa",
                    "Bắt đầu từ giai đoạn lá cờ",
                    "Lặp lại mỗi 10-14 ngày",
                    "🌱 Mẹo: Phòng ngừa tốt hơn chữa trị"
                ]
            },
            {
                title: "✂️ Loại bỏ tàn dư",
                subtitle: null,
                steps: [
                    "Dọn sạch tàn dư sau thu hoạch",
                    "Cày lật đất",
                    "Không để tàn dư trên ruộng"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Quản lý tổng hợp",
                steps: [
                    "Sử dụng giống kháng bệnh",
                    "Luân canh cây trồng",
                    "Quản lý độ ẩm",
                    "Bón phân đầy đủ"
                ]
            }
        ]
    },

    // Corn Healthy
    "Corn_(maize)___healthy": {
        diseaseName: "Ngô khỏe mạnh",
        possibleProblems: [],
        symptoms: "Lá xanh tốt, không có đốm hoặc triệu chứng bất thường\nCây phát triển bình thường\nBắp phát triển tốt",
        causes: "Cây ngô khỏe mạnh, không nhiễm bệnh",
        treatment: [
            {
                title: "🌱 Duy trì sức khỏe cây",
                subtitle: "Tiếp tục chăm sóc tốt",
                steps: [
                    "Tiếp tục tưới nước đều đặn",
                    "Bón phân định kỳ",
                    "Kiểm tra sâu bệnh thường xuyên",
                    "🌱 Mẹo: Phòng bệnh tốt hơn chữa bệnh"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Chăm sóc phòng ngừa",
                steps: [
                    "Tưới nước đúng cách",
                    "Bón phân cân đối",
                    "Kiểm tra cây thường xuyên",
                    "Giữ vệ sinh ruộng"
                ]
            }
        ]
    },

    // Potato Early Blight
    "Potato___Early_blight": {
        diseaseName: "Bệnh cháy lá sớm ở khoai tây",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Nhiệt độ ấm"],
        symptoms: "Đốm nâu sẫm với vòng đồng tâm\nQuầng vàng xung quanh đốm\nLá chết từ dưới lên\nCó thể ảnh hưởng đến củ",
        causes: "Nấm Alternaria solani\nNhiệt độ 24-29°C\nĐộ ẩm cao\nĐiều kiện ẩm ướt",
        treatment: [
            {
                title: "🔬 Sử dụng thuốc diệt nấm",
                subtitle: "Lựa chọn 1: Mancozeb hoặc chlorothalonil",
                steps: [
                    "Phun thuốc diệt nấm khi phát hiện sớm",
                    "Phun vào sáng sớm",
                    "Lặp lại mỗi 7-10 ngày",
                    "🌱 Mẹo: Bắt đầu điều trị ngay khi có dấu hiệu"
                ]
            },
            {
                title: "✂️ Loại bỏ lá bị nhiễm",
                subtitle: null,
                steps: [
                    "Loại bỏ lá bị nhiễm nặng",
                    "Vứt bỏ xa khỏi ruộng",
                    "Khử trùng dụng cụ"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Quản lý canh tác",
                steps: [
                    "Luân canh cây trồng (3-4 năm)",
                    "Sử dụng giống kháng bệnh",
                    "Tưới nước ở gốc, tránh làm ướt lá",
                    "Bón phân cân đối"
                ]
            }
        ]
    },

    // Potato Late Blight
    "Potato___Late_blight": {
        diseaseName: "Bệnh cháy lá muộn ở khoai tây",
        possibleProblems: ["Nấm Phytophthora", "Độ ẩm cao", "Nhiệt độ mát"],
        symptoms: "Vết thương lớn, sẫm màu, ngấm nước\nLớp phủ trắng mờ trên mặt dưới lá\nLá chết nhanh\nCủ bị thối",
        causes: "Nấm Phytophthora infestans\nĐộ ẩm cao (90%+)\nNhiệt độ mát (15-24°C)\nĐiều kiện ẩm ướt",
        treatment: [
            {
                title: "🔬 Sử dụng thuốc diệt nấm",
                subtitle: "Lựa chọn 1: Thuốc diệt nấm hệ thống",
                steps: [
                    "Sử dụng mancozeb hoặc chlorothalonil",
                    "Phun phòng ngừa",
                    "Phun mỗi 7 ngày trong thời tiết ẩm ướt",
                    "🌱 Mẹo: Bắt đầu trước khi bệnh xuất hiện"
                ]
            },
            {
                title: "✂️ Loại bỏ cây bị nhiễm",
                subtitle: null,
                steps: [
                    "Loại bỏ và tiêu hủy cây bị nhiễm ngay",
                    "Không ủ phân từ vật liệu bị nhiễm",
                    "Làm sạch dụng cụ",
                    "🌱 Mẹo: Hành động nhanh - bệnh lây lan rất nhanh"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Phòng ngừa",
                steps: [
                    "Sử dụng giống kháng bệnh",
                    "Luân canh cây trồng",
                    "Cải thiện hệ thống thoát nước",
                    "Theo dõi dự báo thời tiết"
                ]
            }
        ]
    },

    // Potato Healthy
    "Potato___healthy": {
        diseaseName: "Khoai tây khỏe mạnh",
        possibleProblems: [],
        symptoms: "Lá xanh tốt, không có đốm hoặc triệu chứng bất thường\nCây phát triển bình thường\nCủ phát triển tốt",
        causes: "Cây khoai tây khỏe mạnh, không nhiễm bệnh",
        treatment: [
            {
                title: "🌱 Duy trì sức khỏe cây",
                subtitle: "Tiếp tục chăm sóc tốt",
                steps: [
                    "Tiếp tục tưới nước đều đặn",
                    "Bón phân định kỳ",
                    "Kiểm tra sâu bệnh thường xuyên",
                    "🌱 Mẹo: Phòng bệnh tốt hơn chữa bệnh"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Chăm sóc phòng ngừa",
                steps: [
                    "Tưới nước đúng cách",
                    "Bón phân cân đối",
                    "Kiểm tra cây thường xuyên",
                    "Giữ vệ sinh ruộng"
                ]
            }
        ]
    },

    // Rice Brown Spot
    "Rice___Brown_Spot": {
        diseaseName: "Bệnh đốm nâu ở lúa",
        possibleProblems: ["Nhiễm nấm", "Thiếu dinh dưỡng", "Độ ẩm cao"],
        symptoms: "Đốm tròn, nâu sẫm trên lá\nĐốm có viền vàng\nLá chuyển vàng và khô\nGiảm năng suất",
        causes: "Nấm Cochliobolus miyabeanus\nThiếu kali\nĐộ ẩm cao\nNhiệt độ 25-30°C",
        treatment: [
            {
                title: "🔬 Sử dụng thuốc diệt nấm",
                subtitle: "Lựa chọn 1: Propiconazole hoặc tricyclazole",
                steps: [
                    "Phun thuốc diệt nấm khi phát hiện sớm",
                    "Phun vào giai đoạn đẻ nhánh",
                    "Lặp lại mỗi 10-14 ngày",
                    "🌱 Mẹo: Kết hợp với bón phân kali"
                ]
            },
            {
                title: "🌾 Bón phân kali",
                subtitle: null,
                steps: [
                    "Bón phân kali đầy đủ",
                    "Bón theo khuyến cáo",
                    "Cải thiện sức khỏe cây",
                    "Tăng khả năng kháng bệnh"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Quản lý dinh dưỡng",
                steps: [
                    "Bón phân cân đối NPK",
                    "Đặc biệt chú ý kali",
                    "Quản lý nước tốt",
                    "Sử dụng giống kháng bệnh"
                ]
            }
        ]
    },

    // Rice Leaf Blast
    "Rice___Leaf_Blast": {
        diseaseName: "Bệnh đạo ôn lá ở lúa",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Nhiệt độ mát"],
        symptoms: "Đốm hình thoi, xám ở giữa\nViền nâu xung quanh\nLá chết nhanh\nCó thể ảnh hưởng đến cổ bông",
        causes: "Nấm Magnaporthe oryzae\nNhiệt độ 20-28°C\nĐộ ẩm cao (90%+)\nSương mù buổi sáng",
        treatment: [
            {
                title: "🔬 Sử dụng thuốc diệt nấm",
                subtitle: "Lựa chọn 1: Tricyclazole hoặc isoprothiolane",
                steps: [
                    "Phun thuốc diệt nấm khi phát hiện sớm",
                    "Phun vào giai đoạn đẻ nhánh và làm đòng",
                    "Lặp lại mỗi 7-10 ngày",
                    "🌱 Mẹo: Điều trị sớm rất quan trọng"
                ]
            },
            {
                title: "🌾 Quản lý nước",
                subtitle: null,
                steps: [
                    "Giữ mực nước ổn định",
                    "Tránh để ruộng khô",
                    "Tưới nước đều đặn",
                    "Cải thiện thoát nước"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Phòng ngừa",
                steps: [
                    "Sử dụng giống kháng bệnh",
                    "Bón phân cân đối",
                    "Quản lý nước tốt",
                    "Vệ sinh ruộng sau thu hoạch"
                ]
            }
        ]
    },

    // Rice Neck Blast
    "Rice___Neck_Blast": {
        diseaseName: "Bệnh đạo ôn cổ bông ở lúa",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Thiệt hại nghiêm trọng"],
        symptoms: "Vết thương ở cổ bông\nBông lúa bị gãy\nHạt lép hoặc không có hạt\nGiảm năng suất nghiêm trọng",
        causes: "Nấm Magnaporthe oryzae\nNhiệt độ 20-28°C\nĐộ ẩm cao\nBệnh đạo ôn lá không được kiểm soát",
        treatment: [
            {
                title: "🔬 Sử dụng thuốc diệt nấm",
                subtitle: "Lựa chọn 1: Tricyclazole hoặc isoprothiolane",
                steps: [
                    "Phun thuốc diệt nấm vào giai đoạn trổ",
                    "Phun kỹ vào cổ bông",
                    "Lặp lại sau 7 ngày nếu cần",
                    "🌱 Mẹo: Phòng ngừa từ giai đoạn đẻ nhánh"
                ]
            },
            {
                title: "🌾 Quản lý tổng hợp",
                subtitle: null,
                steps: [
                    "Kiểm soát bệnh đạo ôn lá sớm",
                    "Sử dụng giống kháng bệnh",
                    "Bón phân cân đối",
                    "Quản lý nước tốt"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Phòng ngừa cho vụ sau",
                steps: [
                    "Sử dụng giống kháng bệnh",
                    "Vệ sinh ruộng sau thu hoạch",
                    "Bón phân cân đối",
                    "Quản lý nước tốt"
                ]
            }
        ]
    },

    // Rice Healthy
    "Rice___Healthy": {
        diseaseName: "Lúa khỏe mạnh",
        possibleProblems: [],
        symptoms: "Lá xanh tốt, không có đốm hoặc triệu chứng bất thường\nCây phát triển bình thường\nBông lúa phát triển tốt",
        causes: "Cây lúa khỏe mạnh, không nhiễm bệnh",
        treatment: [
            {
                title: "🌱 Duy trì sức khỏe cây",
                subtitle: "Tiếp tục chăm sóc tốt",
                steps: [
                    "Tiếp tục quản lý nước đúng cách",
                    "Bón phân định kỳ",
                    "Kiểm tra sâu bệnh thường xuyên",
                    "🌱 Mẹo: Phòng bệnh tốt hơn chữa bệnh"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Chăm sóc phòng ngừa",
                steps: [
                    "Quản lý nước tốt",
                    "Bón phân cân đối",
                    "Kiểm tra cây thường xuyên",
                    "Giữ vệ sinh ruộng"
                ]
            }
        ]
    },

    // ========== CÀ CHUA (Ca_Chua) ==========
    "Ca_Chua_Khoe": {
        diseaseName: "Cà chua khỏe mạnh",
        possibleProblems: [],
        symptoms: "Lá xanh tốt, không có đốm hoặc triệu chứng bất thường\nCây phát triển bình thường\nQuả phát triển tốt",
        causes: "Cây cà chua khỏe mạnh, không nhiễm bệnh",
        treatment: [{
            title: "🌱 Duy trì sức khỏe cây",
            subtitle: "Tiếp tục chăm sóc tốt",
            steps: [
                "Tiếp tục tưới nước đều đặn",
                "Bón phân định kỳ",
                "Kiểm tra sâu bệnh thường xuyên",
                "🌱 Mẹo: Phòng bệnh tốt hơn chữa bệnh"
            ]
        }],
        recoveryCare: [{
            title: "Chăm sóc phòng ngừa",
            steps: [
                "Tưới nước đúng cách",
                "Bón phân cân đối",
                "Kiểm tra cây thường xuyên",
                "Giữ vệ sinh vườn"
            ]
        }]
    },
    "Ca_Chua_Dom_Vong": {
        diseaseName: "Bệnh đốm vòng ở cà chua",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Nhiệt độ ấm"],
        symptoms: "Đốm tròn với vòng đồng tâm\nĐốm nâu sẫm với viền vàng\nLá héo và rụng\nCó thể ảnh hưởng đến quả",
        causes: "Nấm Alternaria solani\nNhiệt độ 24-29°C\nĐộ ẩm cao\nĐiều kiện ẩm ướt",
        treatment: [{
            title: "🔬 Sử dụng thuốc diệt nấm",
            subtitle: "Lựa chọn 1: Mancozeb hoặc chlorothalonil",
            steps: [
                "Phun thuốc diệt nấm khi phát hiện sớm",
                "Phun vào sáng sớm",
                "Lặp lại mỗi 7-10 ngày",
                "🌱 Mẹo: Bắt đầu điều trị ngay khi có dấu hiệu"
            ]
        }, {
            title: "✂️ Loại bỏ lá bị nhiễm",
            subtitle: null,
            steps: [
                "Loại bỏ lá bị nhiễm nặng",
                "Vứt bỏ xa khỏi vườn",
                "Khử trùng dụng cụ"
            ]
        }],
        recoveryCare: [{
            title: "Quản lý canh tác",
            steps: [
                "Luân canh cây trồng",
                "Tưới nước ở gốc, tránh làm ướt lá",
                "Cải thiện lưu thông không khí",
                "Bón phân cân đối"
            ]
        }]
    },
    "Ca_Chua_Dom_Septoria": {
        diseaseName: "Bệnh đốm lá Septoria ở cà chua",
        possibleProblems: ["Nhiễm nấm", "Lá ướt", "Độ ẩm cao"],
        symptoms: "Các đốm nhỏ, tròn, nâu sẫm\nQuầng vàng xung quanh đốm\nĐốm có chấm đen ở giữa\nRụng lá từ phía dưới",
        causes: "Nấm Septoria lycopersici\nNhiệt độ 20-27°C\nĐộ ẩm cao trên 90%\nNước bắn lên lá từ đất",
        treatment: [{
            title: "🔬 Sử dụng thuốc diệt nấm",
            subtitle: "Lựa chọn 1: Chlorothalonil hoặc mancozeb",
            steps: [
                "Phun thuốc diệt nấm",
                "Bắt đầu điều trị sớm",
                "Lặp lại mỗi 7-14 ngày",
                "Phun vào sáng sớm"
            ]
        }, {
            title: "✂️ Loại bỏ lá bị nhiễm",
            subtitle: null,
            steps: [
                "Loại bỏ lá bị nhiễm nặng",
                "Vứt bỏ xa khỏi vườn",
                "Khử trùng dụng cụ"
            ]
        }],
        recoveryCare: [{
            title: "Ngăn ngừa lây lan",
            steps: [
                "Tưới nước ở gốc, tránh làm ướt lá",
                "Phủ lớp phủ để ngăn đất bắn lên",
                "Cải thiện lưu thông không khí",
                "Trồng cây với khoảng cách phù hợp"
            ]
        }]
    },
    "Ca_Chua_Kham_La": {
        diseaseName: "Bệnh khảm lá ở cà chua",
        possibleProblems: ["Virus", "Côn trùng trung gian", "Lây lan qua cơ giới"],
        symptoms: "Lá có mô hình khảm xanh-vàng\nLá nhăn và cong\nCây còi cọc, phát triển chậm\nQuả nhỏ và biến dạng",
        causes: "Virus TMV hoặc CMV\nLây lan qua tiếp xúc\nCôn trùng như rệp\nVật liệu trồng trọt nhiễm bệnh",
        treatment: [{
            title: "❌ Loại bỏ cây bị nhiễm",
            subtitle: "Lựa chọn 1: Tiêu hủy ngay",
            steps: [
                "Loại bỏ và tiêu hủy cây bị nhiễm ngay lập tức",
                "Không ủ phân",
                "Làm sạch tất cả dụng cụ",
                "🌱 Mẹo: Virus không có thuốc chữa, chỉ phòng ngừa"
            ]
        }, {
            title: "🛡️ Ngăn chặn lây lan",
            subtitle: null,
            steps: [
                "Rửa tay trước khi chạm vào cây",
                "Khử trùng dụng cụ",
                "Kiểm soát côn trùng",
                "Sử dụng giống kháng virus"
            ]
        }],
        recoveryCare: [{
            title: "Phòng ngừa",
            steps: [
                "Sử dụng hạt giống không nhiễm bệnh",
                "Tránh hút thuốc gần cây",
                "Kiểm soát côn trùng trung gian",
                "Luân canh cây trồng"
            ]
        }]
    },
    "Ca_Chua_Nam_Moc": {
        diseaseName: "Bệnh nấm mốc ở cà chua",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Lưu thông không khí kém"],
        symptoms: "Các đốm vàng trên mặt trên lá\nLớp phủ xám hoặc nâu trên mặt dưới lá\nLá héo và rụng\nThường xảy ra trong nhà kính",
        causes: "Nấm Passalora fulva\nĐộ ẩm cao (85%+)\nNhiệt độ ẩm 21-24°C\nThiếu lưu thông không khí",
        treatment: [{
            title: "🔬 Sử dụng thuốc diệt nấm",
            subtitle: "Lựa chọn 1: Thuốc diệt nấm gốc đồng",
            steps: [
                "Phun thuốc diệt nấm theo hướng dẫn",
                "Phun vào sáng sớm",
                "Lặp lại mỗi 7-10 ngày",
                "🌱 Mẹo: Phun cả mặt trên và mặt dưới lá"
            ]
        }, {
            title: "✂️ Loại bỏ lá bị nhiễm",
            subtitle: null,
            steps: [
                "Loại bỏ lá bị nhiễm ngay lập tức",
                "Tỉa để cải thiện lưu thông không khí",
                "Khử trùng dụng cụ sau mỗi lần sử dụng"
            ]
        }],
        recoveryCare: [{
            title: "Cải thiện môi trường",
            steps: [
                "Giảm độ ẩm xuống dưới 80%",
                "Tăng lưu thông không khí",
                "Tưới nước ở gốc, tránh làm ướt lá",
                "Giữ khoảng cách giữa các cây"
            ]
        }]
    },

    // ========== ỚT (Ot) ==========
    "Ot_Khoe": {
        diseaseName: "Ớt khỏe mạnh",
        possibleProblems: [],
        symptoms: "Lá xanh tốt, không có triệu chứng bất thường\nCây phát triển bình thường\nQuả phát triển khỏe mạnh",
        causes: "Cây ớt khỏe mạnh, không nhiễm bệnh",
        treatment: [{
            title: "🌱 Duy trì sức khỏe",
            subtitle: "Tiếp tục chăm sóc",
            steps: [
                "Tiếp tục chăm sóc tốt",
                "Bón phân đầy đủ",
                "Kiểm tra thường xuyên",
                "🌱 Mẹo: Phòng bệnh tốt hơn chữa"
            ]
        }],
        recoveryCare: [{
            title: "Chăm sóc phòng ngừa",
            steps: [
                "Tưới nước đều đặn",
                "Bón phân cân đối",
                "Kiểm tra sâu bệnh",
                "Vệ sinh vườn"
            ]
        }]
    },
    "Ot_Xoan_La": {
        diseaseName: "Bệnh xoăn lá ở ớt",
        possibleProblems: ["Virus", "Bọ phấn trắng", "Không có thuốc chữa"],
        symptoms: "Lá cuốn và nhăn\nMàu vàng\nCây còi cọc\nQuả ít hoặc biến dạng",
        causes: "Virus gây bệnh cuốn lá\nBọ phấn trắng\nLây lan nhanh\nKhông có thuốc chữa",
        treatment: [{
            title: "❌ Loại bỏ cây bị nhiễm",
            subtitle: "Lựa chọn 1: Tiêu hủy ngay",
            steps: [
                "Loại bỏ và tiêu hủy cây bị nhiễm",
                "Không ủ phân",
                "Làm sạch dụng cụ",
                "🌱 Mẹo: Virus không thể chữa"
            ]
        }, {
            title: "🛡️ Kiểm soát vector",
            subtitle: null,
            steps: [
                "Kiểm soát bọ phấn trắng",
                "Sử dụng bẫy vàng",
                "Phủ lưới chống côn trùng",
                "Dùng thuốc hữu cơ"
            ]
        }],
        recoveryCare: [{
            title: "Phòng ngừa",
            steps: [
                "Sử dụng giống kháng",
                "Kiểm soát côn trùng",
                "Trồng sớm",
                "Vệ sinh vườn tốt"
            ]
        }]
    },
    "Ot_Dom_La": {
        diseaseName: "Bệnh đốm lá ở ớt",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Lưu thông không khí kém"],
        symptoms: "Đốm tròn với tâm xám\nViền nâu hoặc tím\nLá vàng và rụng\nLàm giảm năng suất",
        causes: "Nấm Cercospora capsici\nĐộ ẩm cao\nNhiệt độ ấm\nLưu thông không khí kém",
        treatment: [{
            title: "🔬 Sử dụng thuốc diệt nấm",
            subtitle: "Lựa chọn 1: Chlorothalonil",
            steps: [
                "Phun thuốc diệt nấm",
                "Bắt đầu điều trị sớm",
                "Lặp lại mỗi 7-10 ngày",
                "Phun vào sáng sớm"
            ]
        }, {
            title: "✂️ Loại bỏ lá bị nhiễm",
            subtitle: null,
            steps: [
                "Loại bỏ lá bị nhiễm nặng",
                "Tỉa để cải thiện lưu thông",
                "Vứt bỏ xa khỏi vườn"
            ]
        }],
        recoveryCare: [{
            title: "Cải thiện môi trường",
            steps: [
                "Giảm độ ẩm",
                "Tăng lưu thông không khí",
                "Tưới nước ở gốc",
                "Giữ khoảng cách cây phù hợp"
            ]
        }]
    },
    "Ot_Vang_La": {
        diseaseName: "Bệnh vàng lá ở ớt",
        possibleProblems: ["Thiếu dinh dưỡng", "Nhiễm nấm", "Độ ẩm cao"],
        symptoms: "Lá vàng, chuyển màu bất thường\nCây còi cọc\nQuả kém phát triển\nGiảm năng suất",
        causes: "Thiếu chất dinh dưỡng\nĐất nghèo dinh dưỡng\npH không phù hợp\nBón phân không đủ",
        treatment: [{
            title: "🌿 Bón phân bổ sung",
            subtitle: "Lựa chọn 1: Phân NPK cân đối",
            steps: [
                "Bón phân NPK 20-20-20",
                "Bón theo hướng dẫn",
                "Bón đều đặn trong mùa vụ",
                "🌱 Mẹo: Kiểm tra pH đất trước"
            ]
        }, {
            title: "🔬 Phân tích đất",
            subtitle: null,
            steps: [
                "Làm xét nghiệm đất",
                "Bổ sung chất còn thiếu",
                "Điều chỉnh pH",
                "Bón phân hữu cơ"
            ]
        }],
        recoveryCare: [{
            title: "Chăm sóc dinh dưỡng",
            steps: [
                "Bón phân đều đặn",
                "Sử dụng phân hữu cơ",
                "Kiểm tra pH định kỳ",
                "Bổ sung vi lượng nếu cần"
            ]
        }]
    },
    "Ot_Than_Thu": {
        diseaseName: "Bệnh thán thư ở ớt",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Nhiệt độ ấm"],
        symptoms: "Đốm tròn, lõm trên quả\nĐốm có màu nâu đen\nQuả thối và rụng\nCó thể ảnh hưởng đến lá",
        causes: "Nấm Colletotrichum capsici\nNhiệt độ 24-30°C\nĐộ ẩm cao\nĐiều kiện ẩm ướt",
        treatment: [{
            title: "🔬 Sử dụng thuốc diệt nấm",
            subtitle: "Lựa chọn 1: Azoxystrobin hoặc mancozeb",
            steps: [
                "Phun thuốc diệt nấm phòng ngừa",
                "Bắt đầu từ giai đoạn ra hoa",
                "Lặp lại mỗi 7-10 ngày",
                "🌱 Mẹo: Phòng ngừa tốt hơn chữa trị"
            ]
        }, {
            title: "✂️ Loại bỏ quả bị nhiễm",
            subtitle: null,
            steps: [
                "Loại bỏ quả bị nhiễm ngay",
                "Vứt bỏ xa khỏi vườn",
                "Khử trùng dụng cụ"
            ]
        }],
        recoveryCare: [{
            title: "Quản lý canh tác",
            steps: [
                "Tưới nước ở gốc",
                "Tránh làm ướt quả",
                "Cải thiện lưu thông không khí",
                "Bón phân cân đối"
            ]
        }]
    },

    // ========== CÀ PHÊ (Ca_Phe) ==========
    "Ca_Phe_Khoe": {
        diseaseName: "Cà phê khỏe mạnh",
        possibleProblems: [],
        symptoms: "Lá xanh tốt, không có triệu chứng bất thường\nCây phát triển bình thường\nQuả phát triển tốt",
        causes: "Cây cà phê khỏe mạnh, không nhiễm bệnh",
        treatment: [{
            title: "🌱 Duy trì sức khỏe",
            subtitle: "Tiếp tục chăm sóc",
            steps: [
                "Tiếp tục chăm sóc tốt",
                "Bón phân đầy đủ",
                "Kiểm tra thường xuyên",
                "🌱 Mẹo: Phòng bệnh tốt hơn chữa"
            ]
        }],
        recoveryCare: [{
            title: "Chăm sóc phòng ngừa",
            steps: [
                "Tưới nước đều đặn",
                "Bón phân cân đối",
                "Kiểm tra sâu bệnh",
                "Vệ sinh vườn"
            ]
        }]
    },
    "Ca_Phe_Dom_Rong": {
        diseaseName: "Bệnh đốm rong ở cà phê",
        possibleProblems: ["Nhiễm tảo", "Độ ẩm cao", "Thiếu ánh sáng"],
        symptoms: "Đốm xanh hoặc nâu trên lá\nLá có lớp phủ mỏng\nGiảm quang hợp\nCây suy yếu",
        causes: "Tảo Cephaleuros virescens\nĐộ ẩm cao\nThiếu ánh sáng\nLưu thông không khí kém",
        treatment: [{
            title: "🔬 Sử dụng thuốc diệt tảo",
            subtitle: "Lựa chọn 1: Copper-based fungicide",
            steps: [
                "Phun thuốc diệt tảo",
                "Bắt đầu điều trị sớm",
                "Lặp lại mỗi 10-14 ngày",
                "Phun đều toàn bộ cây"
            ]
        }, {
            title: "✂️ Tỉa cành",
            subtitle: null,
            steps: [
                "Tỉa cành để tăng ánh sáng",
                "Cải thiện lưu thông không khí",
                "Loại bỏ lá bị nhiễm nặng"
            ]
        }],
        recoveryCare: [{
            title: "Cải thiện môi trường",
            steps: [
                "Tăng ánh sáng",
                "Giảm độ ẩm",
                "Cải thiện lưu thông không khí",
                "Bón phân cân đối"
            ]
        }]
    },
    "Ca_Phe_Ri_Sat": {
        diseaseName: "Bệnh rỉ sắt ở cà phê",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Nhiệt độ mát"],
        symptoms: "Đốm nhỏ màu vàng cam trên lá\nĐốm phát triển thành vết lớn\nBột màu cam (bào tử)\nLá khô và rụng",
        causes: "Nấm Hemileia vastatrix\nNhiệt độ 20-25°C\nĐộ ẩm cao\nSương mù buổi sáng",
        treatment: [{
            title: "🔬 Sử dụng thuốc diệt nấm",
            subtitle: "Lựa chọn 1: Triazole hoặc strobilurin",
            steps: [
                "Phun thuốc diệt nấm khi phát hiện sớm",
                "Phun vào sáng sớm",
                "Lặp lại mỗi 10-14 ngày",
                "🌱 Mẹo: Điều trị sớm quan trọng"
            ]
        }, {
            title: "✂️ Loại bỏ lá bị nhiễm",
            subtitle: null,
            steps: [
                "Loại bỏ lá bị nhiễm nặng",
                "Vứt bỏ xa khỏi vườn",
                "Khử trùng dụng cụ"
            ]
        }],
        recoveryCare: [{
            title: "Phòng ngừa",
            steps: [
                "Sử dụng giống kháng bệnh",
                "Trồng đúng thời vụ",
                "Quản lý độ ẩm",
                "Bón phân cân đối"
            ]
        }]
    },
    "Ca_Phe_Phan_Trang": {
        diseaseName: "Bệnh phấn trắng ở cà phê",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Lưu thông không khí kém"],
        symptoms: "Lớp phủ trắng trên lá\nLá vàng và rụng\nCây còi cọc\nGiảm năng suất",
        causes: "Nấm Oidium coffeeae\nĐộ ẩm cao\nNhiệt độ 20-25°C\nLưu thông không khí kém",
        treatment: [{
            title: "🔬 Sử dụng thuốc diệt nấm",
            subtitle: "Lựa chọn 1: Sulfur hoặc myclobutanil",
            steps: [
                "Phun thuốc diệt nấm",
                "Bắt đầu điều trị sớm",
                "Lặp lại mỗi 7-10 ngày",
                "Phun vào sáng sớm"
            ]
        }, {
            title: "✂️ Loại bỏ lá bị nhiễm",
            subtitle: null,
            steps: [
                "Loại bỏ lá bị nhiễm nặng",
                "Tỉa để cải thiện lưu thông",
                "Vứt bỏ xa khỏi vườn"
            ]
        }],
        recoveryCare: [{
            title: "Cải thiện môi trường",
            steps: [
                "Giảm độ ẩm",
                "Tăng lưu thông không khí",
                "Tưới nước ở gốc",
                "Giữ khoảng cách cây phù hợp"
            ]
        }]
    },
    "Ca_Phe_Sau_Ve_Bua": {
        diseaseName: "Sâu vẽ bùa ở cà phê",
        possibleProblems: ["Sâu hại", "Thiếu thiên địch", "Mật độ cao"],
        symptoms: "Đường vẽ ngoằn ngoèo trên lá\nLá khô và rụng\nGiảm quang hợp\nCây suy yếu",
        causes: "Sâu vẽ bùa Leucoptera coffeella\nThiếu thiên địch\nMật độ cây trồng cao\nThời tiết khô nóng",
        treatment: [{
            title: "🐛 Kiểm soát bằng thuốc",
            subtitle: "Lựa chọn 1: Thuốc trừ sâu sinh học",
            steps: [
                "Sử dụng thuốc trừ sâu sinh học",
                "Phun vào sáng sớm",
                "Lặp lại mỗi 7-10 ngày",
                "🌱 Mẹo: Kết hợp với thiên địch"
            ]
        }, {
            title: "🛡️ Sử dụng thiên địch",
            subtitle: null,
            steps: [
                "Thả bọ rùa hoặc ong ký sinh",
                "Tránh dùng thuốc trừ sâu mạnh",
                "Tạo môi trường cho thiên địch"
            ]
        }],
        recoveryCare: [{
            title: "Quản lý tổng hợp",
            steps: [
                "Kiểm tra thường xuyên",
                "Loại bỏ lá bị nhiễm",
                "Bón phân cân đối",
                "Tưới nước đều đặn"
            ]
        }]
    },

    // ========== CHÈ (Che) ==========
    "Che_Khoe": {
        diseaseName: "Chè khỏe mạnh",
        possibleProblems: [],
        symptoms: "Lá xanh tốt, không có triệu chứng bất thường\nCây phát triển bình thường\nBúp chè phát triển tốt",
        causes: "Cây chè khỏe mạnh, không nhiễm bệnh",
        treatment: [{
            title: "🌱 Duy trì sức khỏe",
            subtitle: "Tiếp tục chăm sóc",
            steps: [
                "Tiếp tục chăm sóc tốt",
                "Bón phân đầy đủ",
                "Kiểm tra thường xuyên",
                "🌱 Mẹo: Phòng bệnh tốt hơn chữa"
            ]
        }],
        recoveryCare: [{
            title: "Chăm sóc phòng ngừa",
            steps: [
                "Tưới nước đều đặn",
                "Bón phân cân đối",
                "Kiểm tra sâu bệnh",
                "Vệ sinh vườn"
            ]
        }]
    },
    "Che_Phong_La": {
        diseaseName: "Bệnh phồng lá ở chè",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Nhiệt độ mát"],
        symptoms: "Lá phồng lên, có bọng nước\nLá chuyển màu vàng hoặc đỏ\nLá rụng sớm\nGiảm năng suất",
        causes: "Nấm Exobasidium vexans\nNhiệt độ 15-20°C\nĐộ ẩm cao\nSương mù buổi sáng",
        treatment: [{
            title: "🔬 Sử dụng thuốc diệt nấm",
            subtitle: "Lựa chọn 1: Copper-based fungicide",
            steps: [
                "Phun thuốc diệt nấm",
                "Bắt đầu điều trị sớm",
                "Lặp lại mỗi 10-14 ngày",
                "Phun vào sáng sớm"
            ]
        }, {
            title: "✂️ Loại bỏ lá bị nhiễm",
            subtitle: null,
            steps: [
                "Loại bỏ lá bị nhiễm nặng",
                "Vứt bỏ xa khỏi vườn",
                "Khử trùng dụng cụ"
            ]
        }],
        recoveryCare: [{
            title: "Quản lý canh tác",
            steps: [
                "Cải thiện lưu thông không khí",
                "Giảm độ ẩm",
                "Bón phân cân đối",
                "Tỉa cành định kỳ"
            ]
        }]
    },
    "Che_Chay_Nau": {
        diseaseName: "Bệnh cháy nâu ở chè",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Nhiệt độ ấm"],
        symptoms: "Vết thương nâu sẫm trên lá\nLá khô và chết\nLá rụng sớm\nGiảm năng suất",
        causes: "Nấm Pestalotiopsis theae\nNhiệt độ 20-28°C\nĐộ ẩm cao\nĐiều kiện ẩm ướt",
        treatment: [{
            title: "🔬 Sử dụng thuốc diệt nấm",
            subtitle: "Lựa chọn 1: Mancozeb hoặc chlorothalonil",
            steps: [
                "Phun thuốc diệt nấm",
                "Bắt đầu điều trị sớm",
                "Lặp lại mỗi 7-10 ngày",
                "Phun vào sáng sớm"
            ]
        }, {
            title: "✂️ Loại bỏ lá bị nhiễm",
            subtitle: null,
            steps: [
                "Loại bỏ lá bị nhiễm nặng",
                "Tỉa để cải thiện lưu thông",
                "Vứt bỏ xa khỏi vườn"
            ]
        }],
        recoveryCare: [{
            title: "Cải thiện môi trường",
            steps: [
                "Giảm độ ẩm",
                "Tăng lưu thông không khí",
                "Tưới nước ở gốc",
                "Bón phân cân đối"
            ]
        }]
    },
    "Che_Chay_Xam": {
        diseaseName: "Bệnh cháy xám ở chè",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Nhiệt độ mát"],
        symptoms: "Vết thương xám trên lá\nLá khô và chết\nLá rụng sớm\nGiảm năng suất",
        causes: "Nấm Pestalotiopsis theae\nNhiệt độ 18-25°C\nĐộ ẩm cao\nĐiều kiện ẩm ướt",
        treatment: [{
            title: "🔬 Sử dụng thuốc diệt nấm",
            subtitle: "Lựa chọn 1: Mancozeb hoặc chlorothalonil",
            steps: [
                "Phun thuốc diệt nấm",
                "Bắt đầu điều trị sớm",
                "Lặp lại mỗi 7-10 ngày",
                "Phun vào sáng sớm"
            ]
        }, {
            title: "✂️ Loại bỏ lá bị nhiễm",
            subtitle: null,
            steps: [
                "Loại bỏ lá bị nhiễm nặng",
                "Tỉa để cải thiện lưu thông",
                "Vứt bỏ xa khỏi vườn"
            ]
        }],
        recoveryCare: [{
            title: "Cải thiện môi trường",
            steps: [
                "Giảm độ ẩm",
                "Tăng lưu thông không khí",
                "Tưới nước ở gốc",
                "Bón phân cân đối"
            ]
        }]
    },
    "Che_Ri_Sat_Do": {
        diseaseName: "Bệnh rỉ sắt đỏ ở chè",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Nhiệt độ mát"],
        symptoms: "Đốm nhỏ màu đỏ cam trên lá\nĐốm phát triển thành vết lớn\nBột màu đỏ cam (bào tử)\nLá khô và rụng",
        causes: "Nấm Cephaleuros parasiticus\nNhiệt độ 18-25°C\nĐộ ẩm cao\nSương mù buổi sáng",
        treatment: [{
            title: "🔬 Sử dụng thuốc diệt nấm",
            subtitle: "Lựa chọn 1: Triazole hoặc strobilurin",
            steps: [
                "Phun thuốc diệt nấm khi phát hiện sớm",
                "Phun vào sáng sớm",
                "Lặp lại mỗi 10-14 ngày",
                "🌱 Mẹo: Điều trị sớm quan trọng"
            ]
        }, {
            title: "✂️ Loại bỏ lá bị nhiễm",
            subtitle: null,
            steps: [
                "Loại bỏ lá bị nhiễm nặng",
                "Vứt bỏ xa khỏi vườn",
                "Khử trùng dụng cụ"
            ]
        }],
        recoveryCare: [{
            title: "Phòng ngừa",
            steps: [
                "Sử dụng giống kháng bệnh",
                "Trồng đúng thời vụ",
                "Quản lý độ ẩm",
                "Bón phân cân đối"
            ]
        }]
    },
    "Che_Bo_Xit_Muoi": {
        diseaseName: "Bọ xít muỗi ở chè",
        possibleProblems: ["Sâu hại", "Thiếu thiên địch", "Mật độ cao"],
        symptoms: "Lá bị chích hút\nLá vàng và rụng\nBúp chè bị hại\nGiảm năng suất",
        causes: "Bọ xít muỗi Helopeltis theivora\nThiếu thiên địch\nMật độ cây trồng cao\nThời tiết ẩm ướt",
        treatment: [{
            title: "🐛 Kiểm soát bằng thuốc",
            subtitle: "Lựa chọn 1: Thuốc trừ sâu sinh học",
            steps: [
                "Sử dụng thuốc trừ sâu sinh học",
                "Phun vào sáng sớm hoặc chiều tối",
                "Lặp lại mỗi 7-10 ngày",
                "🌱 Mẹo: Kết hợp với thiên địch"
            ]
        }, {
            title: "🛡️ Sử dụng thiên địch",
            subtitle: null,
            steps: [
                "Thả bọ rùa hoặc ong ký sinh",
                "Tránh dùng thuốc trừ sâu mạnh",
                "Tạo môi trường cho thiên địch"
            ]
        }],
        recoveryCare: [{
            title: "Quản lý tổng hợp",
            steps: [
                "Kiểm tra thường xuyên",
                "Loại bỏ lá bị nhiễm",
                "Bón phân cân đối",
                "Tưới nước đều đặn"
            ]
        }]
    },

    // ========== LÚA (Lua) ==========
    "Lua_Khoe": {
        diseaseName: "Lúa khỏe mạnh",
        possibleProblems: [],
        symptoms: "Lá xanh tốt, không có đốm hoặc triệu chứng bất thường\nCây phát triển bình thường\nBông lúa phát triển tốt",
        causes: "Cây lúa khỏe mạnh, không nhiễm bệnh",
        treatment: [{
            title: "🌱 Duy trì sức khỏe cây",
            subtitle: "Tiếp tục chăm sóc tốt",
            steps: [
                "Tiếp tục quản lý nước đúng cách",
                "Bón phân định kỳ",
                "Kiểm tra sâu bệnh thường xuyên",
                "🌱 Mẹo: Phòng bệnh tốt hơn chữa bệnh"
            ]
        }],
        recoveryCare: [{
            title: "Chăm sóc phòng ngừa",
            steps: [
                "Quản lý nước tốt",
                "Bón phân cân đối",
                "Kiểm tra cây thường xuyên",
                "Giữ vệ sinh ruộng"
            ]
        }]
    },
    "Lua_Bac_La": {
        diseaseName: "Bệnh bạc lá ở lúa",
        possibleProblems: ["Nhiễm vi khuẩn", "Độ ẩm cao", "Nhiệt độ ấm"],
        symptoms: "Vết thương dài, màu trắng bạc\nLá chết nhanh\nGiảm năng suất nghiêm trọng\nCó thể ảnh hưởng đến bông",
        causes: "Vi khuẩn Xanthomonas oryzae\nNhiệt độ 25-30°C\nĐộ ẩm cao\nNước bắn lên lá",
        treatment: [{
            title: "🔬 Sử dụng thuốc kháng khuẩn",
            subtitle: "Lựa chọn 1: Copper-based hoặc streptomycin",
            steps: [
                "Phun thuốc kháng khuẩn",
                "Bắt đầu điều trị sớm",
                "Lặp lại mỗi 7-10 ngày",
                "🌱 Mẹo: Điều trị sớm rất quan trọng"
            ]
        }, {
            title: "✂️ Loại bỏ lá bị nhiễm",
            subtitle: null,
            steps: [
                "Loại bỏ lá bị nhiễm nặng",
                "Vứt bỏ xa khỏi ruộng",
                "Khử trùng dụng cụ"
            ]
        }],
        recoveryCare: [{
            title: "Quản lý canh tác",
            steps: [
                "Sử dụng giống kháng bệnh",
                "Quản lý nước tốt",
                "Bón phân cân đối",
                "Vệ sinh ruộng sau thu hoạch"
            ]
        }]
    },
    "Lua_Dom_Nau": {
        diseaseName: "Bệnh đốm nâu ở lúa",
        possibleProblems: ["Nhiễm nấm", "Thiếu dinh dưỡng", "Độ ẩm cao"],
        symptoms: "Đốm tròn, nâu sẫm trên lá\nĐốm có viền vàng\nLá chuyển vàng và khô\nGiảm năng suất",
        causes: "Nấm Cochliobolus miyabeanus\nThiếu kali\nĐộ ẩm cao\nNhiệt độ 25-30°C",
        treatment: [{
            title: "🔬 Sử dụng thuốc diệt nấm",
            subtitle: "Lựa chọn 1: Propiconazole hoặc tricyclazole",
            steps: [
                "Phun thuốc diệt nấm khi phát hiện sớm",
                "Phun vào giai đoạn đẻ nhánh",
                "Lặp lại mỗi 10-14 ngày",
                "🌱 Mẹo: Kết hợp với bón phân kali"
            ]
        }, {
            title: "🌾 Bón phân kali",
            subtitle: null,
            steps: [
                "Bón phân kali đầy đủ",
                "Bón theo khuyến cáo",
                "Cải thiện sức khỏe cây",
                "Tăng khả năng kháng bệnh"
            ]
        }],
        recoveryCare: [{
            title: "Quản lý dinh dưỡng",
            steps: [
                "Bón phân cân đối NPK",
                "Đặc biệt chú ý kali",
                "Quản lý nước tốt",
                "Sử dụng giống kháng bệnh"
            ]
        }]
    },
    "Lua_Dao_On": {
        diseaseName: "Bệnh đạo ôn ở lúa",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Nhiệt độ mát"],
        symptoms: "Đốm hình thoi, xám ở giữa\nViền nâu xung quanh\nLá chết nhanh\nCó thể ảnh hưởng đến cổ bông",
        causes: "Nấm Magnaporthe oryzae\nNhiệt độ 20-28°C\nĐộ ẩm cao (90%+)\nSương mù buổi sáng",
        treatment: [{
            title: "🔬 Sử dụng thuốc diệt nấm",
            subtitle: "Lựa chọn 1: Tricyclazole hoặc isoprothiolane",
            steps: [
                "Phun thuốc diệt nấm khi phát hiện sớm",
                "Phun vào giai đoạn đẻ nhánh và làm đòng",
                "Lặp lại mỗi 7-10 ngày",
                "🌱 Mẹo: Điều trị sớm rất quan trọng"
            ]
        }, {
            title: "🌾 Quản lý nước",
            subtitle: null,
            steps: [
                "Giữ mực nước ổn định",
                "Tránh để ruộng khô",
                "Tưới nước đều đặn",
                "Cải thiện thoát nước"
            ]
        }],
        recoveryCare: [{
            title: "Phòng ngừa",
            steps: [
                "Sử dụng giống kháng bệnh",
                "Bón phân cân đối",
                "Quản lý nước tốt",
                "Vệ sinh ruộng sau thu hoạch"
            ]
        }]
    },
    "Lua_Sau_Duc_Than": {
        diseaseName: "Sâu đục thân ở lúa",
        possibleProblems: ["Sâu hại", "Thiếu thiên địch", "Mật độ cao"],
        symptoms: "Thân cây bị đục\nBông lúa bị gãy\nHạt lép hoặc không có hạt\nGiảm năng suất nghiêm trọng",
        causes: "Sâu đục thân Scirpophaga incertulas\nThiếu thiên địch\nMật độ cây trồng cao\nThời tiết ẩm ướt",
        treatment: [{
            title: "🐛 Kiểm soát bằng thuốc",
            subtitle: "Lựa chọn 1: Thuốc trừ sâu sinh học",
            steps: [
                "Sử dụng thuốc trừ sâu sinh học",
                "Phun vào giai đoạn đẻ nhánh và làm đòng",
                "Lặp lại mỗi 7-10 ngày",
                "🌱 Mẹo: Kết hợp với thiên địch"
            ]
        }, {
            title: "🛡️ Sử dụng thiên địch",
            subtitle: null,
            steps: [
                "Thả ong ký sinh",
                "Tránh dùng thuốc trừ sâu mạnh",
                "Tạo môi trường cho thiên địch"
            ]
        }],
        recoveryCare: [{
            title: "Quản lý tổng hợp",
            steps: [
                "Kiểm tra thường xuyên",
                "Loại bỏ cây bị nhiễm",
                "Bón phân cân đối",
                "Quản lý nước tốt"
            ]
        }]
    },

    // ========== SẮN (San) ==========
    "San_Khoe": {
        diseaseName: "Sắn khỏe mạnh",
        possibleProblems: [],
        symptoms: "Lá xanh tốt, không có triệu chứng bất thường\nCây phát triển bình thường\nCủ sắn phát triển tốt",
        causes: "Cây sắn khỏe mạnh, không nhiễm bệnh",
        treatment: [{
            title: "🌱 Duy trì sức khỏe",
            subtitle: "Tiếp tục chăm sóc",
            steps: [
                "Tiếp tục chăm sóc tốt",
                "Bón phân đầy đủ",
                "Kiểm tra thường xuyên",
                "🌱 Mẹo: Phòng bệnh tốt hơn chữa"
            ]
        }],
        recoveryCare: [{
            title: "Chăm sóc phòng ngừa",
            steps: [
                "Tưới nước đều đặn",
                "Bón phân cân đối",
                "Kiểm tra sâu bệnh",
                "Vệ sinh ruộng"
            ]
        }]
    },
    "San_Chay_La_Vi_Khuan": {
        diseaseName: "Bệnh cháy lá vi khuẩn ở sắn",
        possibleProblems: ["Nhiễm vi khuẩn", "Độ ẩm cao", "Nhiệt độ ấm"],
        symptoms: "Vết thương nâu sẫm trên lá\nLá chết nhanh\nLá rụng sớm\nGiảm năng suất",
        causes: "Vi khuẩn Xanthomonas axonopodis\nNhiệt độ 25-30°C\nĐộ ẩm cao\nNước bắn lên lá",
        treatment: [{
            title: "🔬 Sử dụng thuốc kháng khuẩn",
            subtitle: "Lựa chọn 1: Copper-based hoặc streptomycin",
            steps: [
                "Phun thuốc kháng khuẩn",
                "Bắt đầu điều trị sớm",
                "Lặp lại mỗi 7-10 ngày",
                "🌱 Mẹo: Điều trị sớm rất quan trọng"
            ]
        }, {
            title: "✂️ Loại bỏ lá bị nhiễm",
            subtitle: null,
            steps: [
                "Loại bỏ lá bị nhiễm nặng",
                "Vứt bỏ xa khỏi ruộng",
                "Khử trùng dụng cụ"
            ]
        }],
        recoveryCare: [{
            title: "Quản lý canh tác",
            steps: [
                "Sử dụng giống kháng bệnh",
                "Quản lý nước tốt",
                "Bón phân cân đối",
                "Vệ sinh ruộng sau thu hoạch"
            ]
        }]
    },
    "San_Van_Nau": {
        diseaseName: "Bệnh vằn nâu ở sắn",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Nhiệt độ ấm"],
        symptoms: "Vết thương vằn nâu trên lá\nLá khô và chết\nLá rụng sớm\nGiảm năng suất",
        causes: "Nấm Cercospora manihotis\nNhiệt độ 25-30°C\nĐộ ẩm cao\nĐiều kiện ẩm ướt",
        treatment: [{
            title: "🔬 Sử dụng thuốc diệt nấm",
            subtitle: "Lựa chọn 1: Mancozeb hoặc chlorothalonil",
            steps: [
                "Phun thuốc diệt nấm",
                "Bắt đầu điều trị sớm",
                "Lặp lại mỗi 7-10 ngày",
                "Phun vào sáng sớm"
            ]
        }, {
            title: "✂️ Loại bỏ lá bị nhiễm",
            subtitle: null,
            steps: [
                "Loại bỏ lá bị nhiễm nặng",
                "Tỉa để cải thiện lưu thông",
                "Vứt bỏ xa khỏi ruộng"
            ]
        }],
        recoveryCare: [{
            title: "Cải thiện môi trường",
            steps: [
                "Giảm độ ẩm",
                "Tăng lưu thông không khí",
                "Tưới nước ở gốc",
                "Bón phân cân đối"
            ]
        }]
    },
    "San_Nhen": {
        diseaseName: "Nhện đỏ ở sắn",
        possibleProblems: ["Sâu hại", "Không khí khô", "Thiếu thiên địch"],
        symptoms: "Lá phía dưới có đốm vàng nhỏ\nXuất hiện mạng nhện mỏng\nLá chuyển vàng và héo\nLá rụng sớm",
        causes: "Nhện đỏ Tetranychus urticae\nThời tiết khô nóng\nThiếu thiên địch tự nhiên\nMật độ cây trồng cao",
        treatment: [{
            title: "🐛 Kiểm soát bằng thiên địch",
            subtitle: "Lựa chọn 1: Thiên địch tự nhiên",
            steps: [
                "Thả bọ rùa hoặc nhện ăn thịt",
                "Sử dụng các loài thiên địch hiệu quả",
                "Tránh dùng thuốc trừ sâu mạnh",
                "🌱 Mẹo: Thiên địch là giải pháp lâu dài và an toàn"
            ]
        }, {
            title: "🧪 Sử dụng thuốc hữu cơ",
            subtitle: null,
            steps: [
                "Xịt nước xà phòng loãng",
                "Hoặc dầu neem",
                "Phun vào mặt dưới lá nơi nhện ẩn náu",
                "Lặp lại mỗi 3-5 ngày"
            ]
        }],
        recoveryCare: [{
            title: "Tăng độ ẩm",
            steps: [
                "Tăng độ ẩm môi trường",
                "Phun nước sương vào buổi sáng",
                "Tránh để cây bị khô",
                "Tưới nước đều đặn"
            ]
        }]
    },
    "San_Kham_La": {
        diseaseName: "Bệnh khảm lá ở sắn",
        possibleProblems: ["Virus", "Côn trùng trung gian", "Lây lan qua cơ giới"],
        symptoms: "Lá có mô hình khảm xanh-vàng\nLá nhăn và cong\nCây còi cọc, phát triển chậm\nCủ nhỏ và kém phát triển",
        causes: "Virus khảm lá sắn (CMV)\nLây lan qua tiếp xúc\nCôn trùng như rệp\nVật liệu trồng trọt nhiễm bệnh",
        treatment: [{
            title: "❌ Loại bỏ cây bị nhiễm",
            subtitle: "Lựa chọn 1: Tiêu hủy ngay",
            steps: [
                "Loại bỏ và tiêu hủy cây bị nhiễm ngay lập tức",
                "Không ủ phân",
                "Làm sạch tất cả dụng cụ",
                "🌱 Mẹo: Virus không có thuốc chữa, chỉ phòng ngừa"
            ]
        }, {
            title: "🛡️ Ngăn chặn lây lan",
            subtitle: null,
            steps: [
                "Rửa tay trước khi chạm vào cây",
                "Khử trùng dụng cụ",
                "Kiểm soát côn trùng",
                "Sử dụng giống kháng virus"
            ]
        }],
        recoveryCare: [{
            title: "Phòng ngừa",
            steps: [
                "Sử dụng hom giống không nhiễm bệnh",
                "Kiểm soát côn trùng trung gian",
                "Luân canh cây trồng",
                "Vệ sinh ruộng sau thu hoạch"
            ]
        }]
    },

    // ========== NGÔ (Ngo) ==========
    "Ngo_Khoe": {
        diseaseName: "Ngô khỏe mạnh",
        possibleProblems: [],
        symptoms: "Lá xanh tốt, không có đốm hoặc triệu chứng bất thường\nCây phát triển bình thường\nBắp phát triển tốt",
        causes: "Cây ngô khỏe mạnh, không nhiễm bệnh",
        treatment: [{
            title: "🌱 Duy trì sức khỏe cây",
            subtitle: "Tiếp tục chăm sóc tốt",
            steps: [
                "Tiếp tục tưới nước đều đặn",
                "Bón phân định kỳ",
                "Kiểm tra sâu bệnh thường xuyên",
                "🌱 Mẹo: Phòng bệnh tốt hơn chữa bệnh"
            ]
        }],
        recoveryCare: [{
            title: "Chăm sóc phòng ngừa",
            steps: [
                "Tưới nước đúng cách",
                "Bón phân cân đối",
                "Kiểm tra cây thường xuyên",
                "Giữ vệ sinh ruộng"
            ]
        }]
    },
    "Ngo_Chay_La": {
        diseaseName: "Bệnh cháy lá ở ngô",
        possibleProblems: ["Nhiễm nấm", "Độ ẩm cao", "Nhiệt độ mát"],
        symptoms: "Vết thương hình thoi, xám xanh\nVết thương lớn dần, nâu sẫm\nLá chết từ dưới lên\nGiảm năng suất nghiêm trọng",
        causes: "Nấm Exserohilum turcicum\nNhiệt độ 18-27°C\nĐộ ẩm cao\nThời tiết ẩm ướt kéo dài",
        treatment: [{
            title: "🔬 Sử dụng thuốc diệt nấm",
            subtitle: "Lựa chọn 1: Azoxystrobin hoặc pyraclostrobin",
            steps: [
                "Phun thuốc diệt nấm phòng ngừa",
                "Bắt đầu từ giai đoạn lá cờ",
                "Lặp lại mỗi 10-14 ngày",
                "🌱 Mẹo: Phòng ngừa tốt hơn chữa trị"
            ]
        }, {
            title: "✂️ Loại bỏ tàn dư",
            subtitle: null,
            steps: [
                "Dọn sạch tàn dư sau thu hoạch",
                "Cày lật đất",
                "Không để tàn dư trên ruộng"
            ]
        }],
        recoveryCare: [{
            title: "Quản lý tổng hợp",
            steps: [
                "Sử dụng giống kháng bệnh",
                "Luân canh cây trồng",
                "Quản lý độ ẩm",
                "Bón phân đầy đủ"
            ]
        }]
    },

    // ========== KHOAI TÂY (Khoai_Tay) ==========
    "Khoai_Tay_Khoe": {
        diseaseName: "Khoai tây khỏe mạnh",
        possibleProblems: [],
        symptoms: "Lá xanh tốt, không có đốm hoặc triệu chứng bất thường\nCây phát triển bình thường\nCủ phát triển tốt",
        causes: "Cây khoai tây khỏe mạnh, không nhiễm bệnh",
        treatment: [{
            title: "🌱 Duy trì sức khỏe cây",
            subtitle: "Tiếp tục chăm sóc tốt",
            steps: [
                "Tiếp tục tưới nước đều đặn",
                "Bón phân định kỳ",
                "Kiểm tra sâu bệnh thường xuyên",
                "🌱 Mẹo: Phòng bệnh tốt hơn chữa bệnh"
            ]
        }],
        recoveryCare: [{
            title: "Chăm sóc phòng ngừa",
            steps: [
                "Tưới nước đúng cách",
                "Bón phân cân đối",
                "Kiểm tra cây thường xuyên",
                "Giữ vệ sinh ruộng"
            ]
        }]
    },
    "Khoai_Tay_Moc_Suong": {
        diseaseName: "Bệnh mốc sương ở khoai tây",
        possibleProblems: ["Nấm Phytophthora", "Độ ẩm cao", "Nhiệt độ mát"],
        symptoms: "Vết thương lớn, sẫm màu, ngấm nước\nLớp phủ trắng mờ trên mặt dưới lá\nLá chết nhanh\nCủ bị thối",
        causes: "Nấm Phytophthora infestans\nĐộ ẩm cao (90%+)\nNhiệt độ mát (15-24°C)\nĐiều kiện ẩm ướt",
        treatment: [{
            title: "🔬 Sử dụng thuốc diệt nấm",
            subtitle: "Lựa chọn 1: Thuốc diệt nấm hệ thống",
            steps: [
                "Sử dụng mancozeb hoặc chlorothalonil",
                "Phun phòng ngừa",
                "Phun mỗi 7 ngày trong thời tiết ẩm ướt",
                "🌱 Mẹo: Bắt đầu trước khi bệnh xuất hiện"
            ]
        }, {
            title: "✂️ Loại bỏ cây bị nhiễm",
            subtitle: null,
            steps: [
                "Loại bỏ và tiêu hủy cây bị nhiễm ngay",
                "Không ủ phân từ vật liệu bị nhiễm",
                "Làm sạch dụng cụ",
                "🌱 Mẹo: Hành động nhanh - bệnh lây lan rất nhanh"
            ]
        }],
        recoveryCare: [{
            title: "Phòng ngừa",
            steps: [
                "Sử dụng giống kháng bệnh",
                "Luân canh cây trồng",
                "Cải thiện hệ thống thoát nước",
                "Theo dõi dự báo thời tiết"
            ]
        }]
    },
    "Khoai_Tay_Tuyen_Trung": {
        diseaseName: "Tuyến trùng ở khoai tây",
        possibleProblems: ["Ký sinh trùng", "Đất nhiễm bệnh", "Thiếu luân canh"],
        symptoms: "Cây còi cọc, phát triển chậm\nLá vàng\nCủ bị biến dạng\nGiảm năng suất",
        causes: "Tuyến trùng Meloidogyne spp.\nĐất nhiễm bệnh\nThiếu luân canh\nĐiều kiện đất không phù hợp",
        treatment: [{
            title: "🔬 Xử lý đất",
            subtitle: "Lựa chọn 1: Thuốc diệt tuyến trùng",
            steps: [
                "Sử dụng thuốc diệt tuyến trùng",
                "Xử lý đất trước khi trồng",
                "Theo dõi và điều trị định kỳ",
                "🌱 Mẹo: Phòng ngừa tốt hơn chữa trị"
            ]
        }, {
            title: "🌾 Luân canh cây trồng",
            subtitle: null,
            steps: [
                "Luân canh với cây không phải ký chủ",
                "Trồng cây họ đậu để cải thiện đất",
                "Tránh trồng khoai tây liên tục",
                "Cải thiện chất lượng đất"
            ]
        }],
        recoveryCare: [{
            title: "Quản lý đất",
            steps: [
                "Luân canh cây trồng (3-4 năm)",
                "Cải thiện chất lượng đất",
                "Bón phân hữu cơ",
                "Theo dõi sức khỏe đất"
            ]
        }]
    },

    // Default template for diseases not in database
    "default": {
        diseaseName: "Bệnh không xác định",
        possibleProblems: ["Nguyên nhân chưa rõ"],
        symptoms: "Vui lòng tham khảo ý kiến chuyên gia về cây trồng để được chẩn đoán chi tiết",
        causes: "Cần điều tra thêm",
        treatment: [
            {
                title: "🔍 Tham khảo ý kiến chuyên gia",
                subtitle: null,
                steps: [
                    "Liên hệ với dịch vụ khuyến nông địa phương",
                    "Cung cấp ảnh rõ ràng về các triệu chứng",
                    "Ghi chú điều kiện phát triển và những thay đổi gần đây",
                    "🌱 Mẹo: Chẩn đoán sớm cải thiện thành công điều trị"
                ]
            }
        ],
        recoveryCare: [
            {
                title: "Chăm sóc tổng quát",
                steps: [
                    "Đảm bảo lịch tưới nước phù hợp",
                    "Kiểm tra sâu bệnh",
                    "Cung cấp chất dinh dưỡng đầy đủ",
                    "Theo dõi cây trồng chặt chẽ"
                ]
            }
        ]
    }
};

/**
 * Lấy thông tin chi tiết về bệnh
 * @param {string} diseaseName - Tên bệnh từ model detection
 * @returns {Object} Thông tin chi tiết về bệnh
 */
function getDiseaseInfo(diseaseName) {
    let diseaseInfo;
    
    // Tìm exact match trước
    if (diseaseDatabase[diseaseName]) {
        diseaseInfo = diseaseDatabase[diseaseName];
    } else {
        // Tìm partial match (case-insensitive)
        const normalizedName = diseaseName.toLowerCase().trim();
        let found = false;
        for (const key in diseaseDatabase) {
            if (key.toLowerCase().includes(normalizedName) || normalizedName.includes(key.toLowerCase())) {
                diseaseInfo = diseaseDatabase[key];
                found = true;
                break;
            }
        }
        
        // Trả về default template với tên bệnh gốc
        if (!found) {
            diseaseInfo = {
                ...diseaseDatabase["default"],
                diseaseName: diseaseName
            };
        }
    }
    
    // Đảm bảo symptoms và causes là string (nếu là array thì chuyển thành string)
    const result = { ...diseaseInfo };
    if (Array.isArray(result.symptoms)) {
        result.symptoms = result.symptoms.join('\n');
    }
    if (Array.isArray(result.causes)) {
        result.causes = result.causes.join('\n');
    }
    
    return result;
}

module.exports = {
    diseaseDatabase,
    getDiseaseInfo
};

