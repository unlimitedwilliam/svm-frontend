const data = {
    summary: [
        {
            title: 'Tổng máy', 
            value: '2,500,000',
            background: 'linear-gradient(261.07deg, #ABDCFF 0%, #0396FF 75.13%)'
        },
        {
            title: 'Đang hoạt động',
            value: '2,500,000',
            background: 'linear-gradient(261.07deg, #84FFBE 0%, #03BD5B 75.13%)'
        },
        {
            title: 'Đã dừng',
            value: '2,500,000',
            background: 'linear-gradient(261.07deg, #FFB8BB 0%, #FF4C54 75.13%)'
        }
    ],
    revenueByMonth: [
        {
            month: 'Jan',
            revenue: 12000,
            sale: 38,
        },
        {
            month: 'Feb',
            revenue: 20000,
            sale: 60,
        },
        {
            month: 'Mar',
            revenue: 75000,
            sale: 120,
        },
        {
            month: 'Apr',
            revenue: 25000, 
            sale: 82, 
        }, 
        {
            month: 'May',
            revenue: 20000, 
            sale: 140,
        },
        {
            month: 'Jun',
            revenue: 37000, 
            sale: 135,
        }
    ],
    revenueByRegion: [
        {
            title: 'Khu vực Hà Nội', 
            change: false,
            value: 20,
        },
        {
            title: 'Khu vực Sài Gòn', 
            change: true,
            value: 20,
            percent: '20,57%'
        }, 
        {
            title: 'Khu vực Miền Trung',
            change: true,
            value: 20,
            percent: '20,57%'
        }
    ],
    totalSale: [
        {
            title: 'Tổng sản phẩm',
            value: '31.350',
            color: 'black',
            percent: 100
        },
        {
            title: 'Đồ ăn',
            value: '16.280',
            color: '#F5A623',
            percent: 15
        },
        {
            title: 'Đồ uống',
            value: '16.280',
            color: '#03BD5B',
            percent: 56
        },
        {
            title: 'Đồ ăn vặt',
            value: '15.070',
            color: '#FF4C54',
            percent: 21
        },
        {
            title: 'Đồ chơi',
            value: '15.070',
            color: '#4A90E2',
            percent: 18
        },
    ],
    revenueByDistrict: [
        {
            title: 'Quận Hai Bà Trưng', 
            value: 127000, 
        },
        {
            title: 'Quận Đống Đa', 
            value: 189000, 
        },
        {
            title: 'Quận Cầu Giấy', 
            value: 59000, 
        },
        {
            title: 'Quận Thanh Xuân', 
            value: 165000, 
        },
        {
            title: 'Quận Hoàng Mai', 
            value: 110500, 
        },        
    ]
}

export default data;