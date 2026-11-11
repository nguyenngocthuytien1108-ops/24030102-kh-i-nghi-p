const navItems = [
  ["Trang chủ", "index.html"],
  ["Kế hoạch kinh doanh", "business-plan.html"],
  ["Phân tích tài chính", "financial-analysis.html"],
  ["Phân tích SWOT", "swot.html"],
  ["5 áp lực Porter", "five-forces.html"],
  ["Phản hồi đọc sách", "reflections.html"],
  ["Kế hoạch 90 ngày", "action-plan.html"],
];

const nav = (current) => `
  <a class="skip-link" href="#main-content">Bỏ qua điều hướng</a>
  <header class="topbar wrap">
    <a class="brand" href="index.html" aria-label="THỞ LẠI, về trang chủ">
      <span class="brand-mark" aria-hidden="true">↗</span>
      <span>THỞ LẠI <small>/ BIG TEAM</small></span>
    </a>
    <nav class="nav" aria-label="Điều hướng chính">
      ${navItems.map(([label, href]) => `<a class="${current === href ? "active" : ""}" ${current === href ? 'aria-current="page"' : ""} href="${href}">${label}</a>`).join("")}
    </nav>
  </header>`;

const footer = `
  <footer class="footer">
    <div class="wrap footer-inner">
      <span>THỞ LẠI · Big Team</span>
      <span>Nội dung kinh doanh theo <code>business_plan.md</code></span>
    </div>
  </footer>`;

const section = (eyebrow, title, content, description = "") => `
  <section class="section">
    <div class="section-head">
      <div><div class="eyebrow">${eyebrow}</div><h2>${title}</h2></div>
      ${description ? `<p>${description}</p>` : ""}
    </div>
    ${content}
  </section>`;

const pages = {
  "index.html": {
    title: "THỞ LẠI",
    eyebrow: "DỰ ÁN KHỞI NGHIỆP · BIG TEAM",
    desc: "Dòng xịt phòng và xịt vải đa năng 70 ml, kết hợp hương theo tâm trạng, hướng đến sinh viên và người trẻ đang ở trọ.",
    art: true,
    body: `
      <div class="wrap">
        ${section("TỔNG QUAN DỰ ÁN", "Một sản phẩm cho không gian sống của người trẻ", `
          <div class="grid three">
            <article class="card feature-card"><span class="tag">SẢN PHẨM</span><h3>THỞ LẠI · 70 ml</h3><p>Chai xịt đa năng dùng cho phòng và vải, có vòi phun sương mịn, mã QR âm thanh và các mùi hương theo tâm trạng.</p></article>
            <article class="card feature-card"><span class="tag">KHÁCH HÀNG</span><h3>Sinh viên và người trẻ ở trọ</h3><p>Học sinh, sinh viên và người trẻ đi làm đang ở trọ hoặc chung cư mini tại các đô thị lớn.</p></article>
            <article class="card feature-card"><span class="tag">ĐỊNH VỊ</span><h3>“Chữa lành giá bình dân”</h3><p>Giải pháp chăm sóc không gian sống với giá bán đề xuất 59.000 VNĐ.</p></article>
          </div>`)}
        ${section("ĐI SÂU VÀO DỰ ÁN", "Các phần nội dung", `
          <div class="grid three">
            ${navItems.slice(1).map(([label, href], index) => `<a class="card page-link" href="${href}"><span class="page-index">0${index + 1}</span><h3>${label} <span aria-hidden="true">↗</span></h3><p>${[
              "Vấn đề, giải pháp sản phẩm, khách hàng và thị trường.",
              "Dự báo doanh thu, chi phí, vốn ban đầu và hòa vốn.",
              "Điểm mạnh, điểm yếu, cơ hội và thách thức trong nguồn.",
              "Năm áp lực và mức định tính đúng theo kế hoạch.",
              "Bài đọc và cảm nhận riêng của từng thành viên.",
              "Sắp xếp hoạt động đã nêu thành các chặng đề xuất.",
            ][index]}</p></a>`).join("")}
          </div>`)}
        <div class="source-note">Thông tin kinh doanh trên website được biên soạn từ <code>business_plan.md</code>. Phản hồi đọc sách được giữ riêng theo từng tệp thành viên.</div>
      </div>`,
  },

  "business-plan.html": {
    title: "Kế hoạch kinh doanh",
    eyebrow: "THỞ LẠI · BIG TEAM",
    desc: "Tóm lược ý tưởng, sản phẩm, khách hàng, thị trường và cách tiếp cận theo business_plan.md.",
    body: `
      <div class="wrap">
        ${section("VẤN ĐỀ & GIẢI PHÁP", "Sản phẩm bắt đầu từ trải nghiệm phòng trọ", `
          <div class="grid two">
            <article class="card"><span class="label">VẤN ĐỀ</span><h3>Không gian chật và áp lực tinh thần</h3><p>Phòng trọ có thể bí bách, ám mùi ẩm mốc hoặc thức ăn; người trẻ cũng gặp áp lực học tập, công việc và burnout, trong khi ngân sách hạn chế.</p></article>
            <article class="card"><span class="label">GIẢI PHÁP</span><h3>Xịt phòng và xịt vải đa năng</h3><p>Chai 70 ml có vòi phun sương mịn, mùi hương theo tâm trạng, công thức Hybrid và mã QR âm thanh chữa lành. Giá bán được nêu trong kế hoạch là 59.000 VNĐ.</p></article>
          </div>`)}
        ${section("ĐẶC ĐIỂM SẢN PHẨM", "Công thức, mùi hương và trải nghiệm", `
          <div class="grid three">
            <article class="card"><span class="metric-inline">70% + 30%</span><h3>Công thức Hybrid</h3><p>70% tinh dầu thiên nhiên kết hợp 30% hương an toàn chuẩn IFRA, theo mô tả trong kế hoạch.</p></article>
            <article class="card"><span class="label">BA DÒNG MÙI HƯƠNG</span><ul class="list"><li>Đêm Sài Gòn Mát Lạnh · hỗ trợ ngủ ngon</li><li>Sạc Lại Năng Lượng · giảm stress, tập trung học tập</li><li>Góc Bình Yên · thư giãn không gian</li></ul></article>
            <article class="card"><span class="label">ĐIỂM KHÁC BIỆT</span><h3>Mood-based scents</h3><p>Đặt tên mùi theo tâm trạng; sản phẩm kết hợp xịt phòng và xịt vải, kèm mã QR âm thanh chữa lành.</p></article>
          </div>`)}
        ${section("KHÁCH HÀNG MỤC TIÊU", "Sinh viên và người trẻ đang ở trọ", `
          <div class="grid two">
            <article class="card"><h3>Nhóm khách hàng</h3><p>Sinh viên đại học, cao đẳng và người trẻ mới đi làm, độ tuổi 18–25, ở trọ, ký túc xá hoặc chung cư mini. Kế hoạch đề cập thử nghiệm tại TP.HCM.</p><p class="muted">Đặc điểm được nêu: thu nhập trung bình/thấp, sống trong không gian dưới 20 m², chuộng tối giản và thường dùng mạng xã hội.</p></article>
            <article class="card"><h3>Nhu cầu và cách tiếp cận</h3><p>Nhu cầu được nêu là khử mùi phòng trọ và giải tỏa áp lực tâm lý. Kế hoạch dự kiến tiếp cận qua video TikTok cá nhân, TikTok Shop và các nhóm Facebook hội sinh viên trọ.</p><p class="muted">Một rủi ro được nêu: khách hàng không thể ngửi mùi qua mạng xã hội. Nhóm đề cập tặng mẫu thử 2 ml trước khi mở seal chai chính.</p></article>
          </div>`)}
        ${section("THỊ TRƯỜNG & KIỂM CHỨNG", "Cơ hội và rủi ro theo kế hoạch", `
          <div class="grid three">
            <article class="card"><span class="label">XU HƯỚNG</span><h3>Self-care và thành phần minh bạch</h3><p>Kế hoạch mô tả nhu cầu self-care ở người trẻ, tiêu dùng sản phẩm minh bạch thành phần và ưa chuộng dung tích nhỏ gọn, đa năng.</p></article>
            <article class="card"><span class="label">SỐ LIỆU ĐƯỢC TRÍCH TRONG NGUỒN</span><h3>Home fragrance · 7,8%–10,2%</h3><p>Mức CAGR dự báo cho Việt Nam giai đoạn 2026–2032 theo 6Wresearch, truy cập ngày 05/10/2026 trong kế hoạch.</p></article>
            <article class="card"><span class="label">SỐ LIỆU ĐƯỢC TRÍCH TRONG NGUỒN</span><h3>Stress ở Gen Z · khoảng 62%</h3><p>Tỷ lệ người trẻ Gen Z tại đô thị lớn thường xuyên căng thẳng theo NielsenIQ, truy cập ngày 10/10/2026 trong kế hoạch.</p></article>
          </div>
          <div class="callout compact-callout"><b>Rủi ro thị trường:</b> khách hàng không ngửi được mùi khi mua qua mạng và cạnh tranh từ các dòng xịt thơm quần áo giá rẻ ngoại nhập.</div>`, "Các số liệu này được trình bày như nội dung đã ghi trong business_plan.md." )}
        ${section("ĐỐI THỦ ĐƯỢC NÊU", "Khoảng trống định vị", `
          <div class="grid three">
            <article class="card competitor"><span class="tag">XỊT VẢI</span><h3>W.Dressroom</h3><p>Mẫu mã đẹp, mùi phổ thông và dễ mua trên Shopee. Kế hoạch nhận định sản phẩm chủ yếu là xịt vải; THỞ LẠI kết hợp xịt phòng và vải, tập trung yếu tố “chữa lành”.</p></article>
            <article class="card competitor"><span class="tag">SẢN PHẨM SIÊU THỊ</span><h3>Glade / Ami</h3><p>Phân phối rộng và giá được nêu ở mức 20.000–40.000 VNĐ. Kế hoạch định vị THỞ LẠI với thiết kế tối giản cho người trẻ.</p></article>
            <article class="card competitor"><span class="tag">NẾN & TINH DẦU</span><h3>Heny Garden</h3><p>Kế hoạch mô tả phân khúc nến và tinh dầu nội địa cao cấp, giá 150.000–350.000 VNĐ; THỞ LẠI hướng tới mức giá 59.000 VNĐ cho sinh viên.</p></article>
          </div>`)}
        <div class="section"><a class="button" href="financial-analysis.html">Xem phân tích tài chính <span aria-hidden="true">→</span></a></div>
      </div>`,
  },

  "financial-analysis.html": {
    title: "Phân tích tài chính",
    eyebrow: "DỰ BÁO · THÁNG HOẠT ĐỘNG ĐẦU TIÊN",
    desc: "Các giá trị dưới đây là dự báo trong business_plan.md, với giả định bán 150 chai mỗi tháng.",
    body: `
      <div class="wrap">
        <div class="assumption-strip"><b>Giả định nguồn:</b> sản lượng 150 chai/tháng · đơn vị tiền tệ VND · kỳ dự báo là tháng hoạt động đầu tiên.</div>
        ${section("KPI THEO KẾ HOẠCH", "Các con số chính", `
          <div class="grid four">
            <article class="card kpi"><span class="label">GIÁ BÁN / CHAI</span><strong>59.000 VNĐ</strong><small>chai xịt đa năng 70 ml</small></article>
            <article class="card kpi"><span class="label">DOANH THU DỰ KIẾN</span><strong>8.850.000</strong><small>VNĐ / tháng</small></article>
            <article class="card kpi"><span class="label">CHI PHÍ KHỞI ĐẦU</span><strong>2.500.000</strong><small>VNĐ · chi một lần</small></article>
            <article class="card kpi"><span class="label">ĐIỂM HÒA VỐN</span><strong>20 chai</strong><small>chai / tháng</small></article>
          </div>`)}
        ${section("TRỰC QUAN CHI PHÍ", "Các khoản vận hành hàng tháng", `
          <div class="card chart-card">
            <p class="muted">Độ dài thanh so sánh quy mô các khoản theo số tiền trong nguồn; nhãn hiển thị nguyên giá trị VND.</p>
            <div class="bar-row"><div class="bar-head"><b>Nguyên vật liệu sản xuất</b><span>4.500.000 VNĐ</span></div><div class="bar"><i style="--bar:100%"></i></div></div>
            <div class="bar-row"><div class="bar-head"><b>Phí sàn thương mại điện tử</b><span>442.500 VNĐ</span></div><div class="bar"><i style="--bar:9.83%"></i></div></div>
            <div class="bar-row"><div class="bar-head"><b>Marketing / mẫu thử</b><span>300.000 VNĐ</span></div><div class="bar"><i style="--bar:6.67%"></i></div></div>
            <div class="bar-row"><div class="bar-head"><b>Vận chuyển nội bộ / phát sinh</b><span>200.000 VNĐ</span></div><div class="bar"><i style="--bar:4.44%"></i></div></div>
          </div>`)}
        ${section("CHI TIẾT DỰ BÁO", "Vốn ban đầu và kết quả tháng", `
          <div class="grid two financial-cards">
            <article class="card"><span class="label">CHI PHÍ KHỞI ĐẦU · CHI MỘT LẦN</span><div class="table-wrap"><table><thead><tr><th>Khoản chi</th><th>Số tiền</th></tr></thead><tbody><tr><td>Thiết kế nhãn mác, bao bì mẫu</td><td>300.000 VNĐ</td></tr><tr><td>Nguyên liệu mẻ đầu (60 chai)</td><td>1.800.000 VNĐ</td></tr><tr><td>Dụng cụ đóng gói</td><td>400.000 VNĐ</td></tr><tr class="total-row"><td>Tổng chi phí khởi đầu</td><td>2.500.000 VNĐ</td></tr></tbody></table></div></article>
            <article class="card"><span class="label">TỔNG HỢP THEO NGUỒN</span><div class="financial-list"><div><span>Doanh thu dự kiến</span><b>8.850.000 VNĐ / tháng</b></div><div><span>Tổng chi phí biến đổi</span><b>4.942.500 VNĐ / tháng</b></div><div><span>Tổng chi phí cố định</span><b>500.000 VNĐ / tháng</b></div><div><span>Số dư đảm phí dự kiến</span><b>3.907.500 VNĐ / tháng</b></div><div><span>Lợi nhuận hoạt động dự kiến*</span><b>4.407.500 VNĐ / tháng</b></div></div></article>
          </div>
          <div class="note"><b>* Cần rà soát phép tính trong nguồn:</b> business_plan.md ghi công thức “8.850.000 − 4.942.500 − 500.000” và kết quả “4.407.500 VNĐ/tháng”. Trang giữ nguyên công thức và kết quả đã ghi, không tự sửa con số.</div>`)}
        ${section("ĐIỂM HÒA VỐN & THU HỒI VỐN", "Kết quả được nêu trong kế hoạch", `
          <div class="grid two">
            <article class="card break-even"><span class="label">ĐIỂM HÒA VỐN</span><strong>20 chai / tháng</strong><p>Nguồn nêu số dư đảm phí 26.000 VNĐ/chai và chi phí cố định 500.000 VNĐ/tháng; kết quả làm tròn lên 20 chai/tháng.</p></article>
            <article class="card"><span class="label">THỜI GIAN THU HỒI CHI PHÍ KHỞI ĐẦU</span><h3>Khoảng 0,57 tháng</h3><p>Ước tính trong nguồn, tương đương chưa tới 18 ngày hoạt động nếu đạt 150 chai. Kết quả này dựa trên lợi nhuận hoạt động mà nguồn ghi; xem lưu ý phép tính phía trên.</p></article>
          </div>`)}
        ${section("GIẢ ĐỊNH KINH DOANH", "Cơ sở dự báo và phương án nếu thấp hơn", `
          <div class="grid two"><article class="card"><h3>Sản lượng dự kiến</h3><p>150 chai/tháng, dựa trên năng lực tiếp cận qua video TikTok cá nhân và các nhóm Facebook hội sinh viên trọ.</p><p>Nếu kết quả thấp hơn: đẩy mạnh tương tác ở các nhóm “Nghiện Decor”, “Phòng Trọ Sinh Viên” hoặc tối ưu combo giảm giá.</p></article><article class="card"><h3>Giá bán và giá vốn</h3><p>Giá bán 59.000 VNĐ; giá vốn 30.000 VNĐ/chai theo giả định trong kế hoạch.</p><p>Nếu nhà cung cấp tăng giá: đàm phán mua số lượng lớn hơn hoặc điều chỉnh nhẹ bao bì để giữ biên lợi nhuận.</p></article></div>`)}
      </div>`,
  },

  "swot.html": {
    title: "Phân tích SWOT",
    eyebrow: "ĐÁNH GIÁ TỪ BUSINESS_PLAN.MD",
    desc: "Bốn nhóm yếu tố, căn cứ và tác động được tóm lược từ bảng SWOT của nhóm.",
    body: `
      <div class="wrap">
        ${section("BỐN NHÓM YẾU TỐ", "SWOT của dự án", `
          <div class="grid two">
            <article class="card swot-card swot-s"><div class="swot-top"><span class="letter">S</span><span class="label">ĐIỂM MẠNH</span></div><h3>Công thức, giá và sự thấu hiểu</h3><p><b>Nhận định:</b> Công thức Hybrid độc đáo, giá bán 59.000 VNĐ, thấu hiểu sâu sắc tâm lý sinh viên.</p><p class="muted"><b>Căn cứ:</b> Khảo sát thực tế nhu cầu và thử nghiệm sản phẩm nội bộ nhóm.</p><p class="impact"><b>Tác động:</b> Tạo lợi thế cạnh tranh về giá và sự đồng cảm thương hiệu.</p></article>
            <article class="card swot-card swot-w"><div class="swot-top"><span class="letter">W</span><span class="label">ĐIỂM YẾU</span></div><h3>Thương hiệu mới, nguồn lực hạn hẹp</h3><p><b>Nhận định:</b> Thương hiệu hoàn toàn mới, chưa có độ nhận diện; nguồn lực tài chính ban đầu hạn hẹp.</p><p class="muted"><b>Căn cứ:</b> Vốn tự có của nhóm sinh viên (3–5 triệu đồng).</p><p class="impact"><b>Tác động:</b> Khó khăn trong việc chạy quảng cáo lớn ở giai đoạn đầu.</p></article>
            <article class="card swot-card swot-o"><div class="swot-top"><span class="letter">O</span><span class="label">CƠ HỘI</span></div><h3>Wellness và mạng xã hội</h3><p><b>Nhận định:</b> Thị trường wellness và home fragrance đang tăng trưởng; TikTok, Threads hỗ trợ lan truyền tự nhiên với chi phí thấp.</p><p class="muted"><b>Căn cứ:</b> Báo cáo thị trường 6Wresearch; xu hướng TikTok Shop.</p><p class="impact"><b>Tác động:</b> Cơ hội tiếp cận hàng ngàn khách hàng trẻ với chi phí tối thiểu.</p></article>
            <article class="card swot-card swot-t"><div class="swot-top"><span class="letter">T</span><span class="label">THÁCH THỨC</span></div><h3>Cạnh tranh giá và vận chuyển</h3><p><b>Nhận định:</b> Cạnh tranh từ sản phẩm giá rẻ trôi nổi và các sàn TMĐT; có rủi ro vận chuyển chất lỏng.</p><p class="muted"><b>Căn cứ:</b> Thực trạng thị trường Shopee/TikTok Shop được nêu trong kế hoạch.</p><p class="impact"><b>Tác động:</b> Có thể gặp áp lực về giá và sự cố giao hàng trong thời gian đầu.</p></article>
          </div>`)}
        ${section("ƯU TIÊN & PHẢN ỨNG", "Cách nhóm dự kiến ứng phó", `
          <div class="grid two"><article class="card"><span class="label">ĐIỂM NỘI BỘ ĐƯỢC NHẤN MẠNH</span><h3>Am hiểu khách hàng mục tiêu</h3><p>Nhóm nêu đây là điểm mạnh quan trọng nhất vì thành viên cũng là sinh viên ở trọ, giúp thông điệp chạm đúng cảm xúc “sống tạm bợ”.</p><p>Điểm yếu nguy hiểm nhất được nêu là ngân sách marketing nhỏ, dễ bị chìm giữa các sản phẩm trên sàn thương mại điện tử.</p></article><article class="card response-card"><span class="label">PHẢN ỨNG ĐƯỢC NÊU TRONG KẾ HOẠCH</span><h3>Chất lượng thực tế và nội dung chân thực</h3><p>Tặng kèm mẫu thử 2 ml để khách yên tâm; xây dựng video ngắn chân thực thay vì đốt tiền chạy quảng cáo.</p></article></div>`)}
      </div>`,
  },

  "five-forces.html": {
    title: "Năm áp lực cạnh tranh của Porter",
    eyebrow: "NỘI DUNG CHỈ TỪ BẢNG PORTER TRONG NGUỒN",
    desc: "Mỗi áp lực có thẻ riêng; mức định tính và lý do được giữ theo business_plan.md.",
    body: `
      <div class="wrap">
        ${section("NĂM YẾU TỐ", "Các áp lực cạnh tranh", `
          <div class="grid three force-grid">
            <article class="card force-card"><span class="force-number">01</span><span class="label">MỨC ĐỘ CẠNH TRANH TRONG NGÀNH</span><h3>Cạnh tranh giữa các đối thủ hiện tại</h3><div class="level">Cao</div><p>Thị trường có nhiều nhãn hàng xịt thơm quần áo và phòng giá rẻ từ nước ngoài trên Shopee/TikTok Shop.</p><p class="muted"><b>Căn cứ:</b> Số lượng shop bán hàng gia dụng trên TMĐT rất lớn.</p></article>
            <article class="card force-card"><span class="force-number">02</span><span class="label">NGUY CƠ TỪ ĐỐI THỦ MỚI GIA NHẬP</span><h3>Nguy cơ đối thủ mới gia nhập</h3><div class="level">Trung bình</div><p>Ngành pha chế hương liệu không quá khó, nhưng đòi hỏi công thức phối trộn để không bị hắc và không ố vải.</p><p class="muted"><b>Căn cứ:</b> Rào cản kỹ thuật công thức pha chế.</p></article>
            <article class="card force-card"><span class="force-number">03</span><span class="label">QUYỀN THƯƠNG LƯỢNG CỦA NHÀ CUNG CẤP</span><h3>Quyền thương lượng của nhà cung cấp</h3><div class="level">Thấp</div><p>Nguyên liệu tinh dầu và vỏ chai pet có sẵn từ nhiều nhà cung cấp khác nhau tại Việt Nam và Trung Quốc.</p><p class="muted"><b>Căn cứ:</b> Thị trường nguyên liệu phong phú.</p></article>
            <article class="card force-card"><span class="force-number">04</span><span class="label">QUYỀN THƯƠNG LƯỢNG CỦA KHÁCH HÀNG</span><h3>Quyền thương lượng của khách hàng</h3><div class="level">Cao</div><p>Khách hàng trẻ có nhiều sự lựa chọn thay thế giá rẻ và dễ chuyển đổi nếu giá cao hoặc mùi không thích.</p><p class="muted"><b>Căn cứ:</b> Đặc tính tiêu dùng của Gen Z trên TMĐT.</p></article>
            <article class="card force-card"><span class="force-number">05</span><span class="label">NGUY CƠ TỪ SẢN PHẨM HOẶC DỊCH VỤ THAY THẾ</span><h3>Nguy cơ từ sản phẩm / dịch vụ thay thế</h3><div class="level">Tung bình</div><p>Các sản phẩm như tinh dầu cắm que, nến thơm, hoặc máy khuếch tán tinh dầu tự động.</p><p class="muted"><b>Căn cứ:</b> Sự đa dạng của các giải pháp làm thơm.</p></article>
          </div>`, "Mức đánh giá ở mỗi thẻ được chép đúng như nguồn, kể cả cách viết “Tung bình”.")}
        <div class="callout"><span class="label">KẾT LUẬN CỦA NHÓM TRONG NGUỒN</span><h3>Thị trường có hấp dẫn để tham gia</h3><p>Dù mức độ cạnh tranh cao, ngách kết hợp giữa khử mùi phòng trọ và chăm sóc cảm xúc với giá bình dân vẫn còn bỏ ngỏ theo nhận định của nhóm.</p></div>
      </div>`,
  },

  "reflections.html": {
    title: "Phản hồi đọc sách của thành viên",
    eyebrow: "GÓC ĐỌC SÁCH · BIG TEAM",
    desc: "Mỗi bài viết được tóm tắt riêng và liên kết tới trang đầy đủ của đúng tệp phản hồi.",
    body: `
      <div class="wrap">
        ${section("BÀI VIẾT CỦA THÀNH VIÊN", "Mỗi góc nhìn, một bài đọc", `
          <div class="grid two">
            <article class="card member-card"><div class="member"><div class="avatar" aria-hidden="true">H</div><div><h3>Trân Quốc Hùng</h3><div class="muted">Thay Đổi Tí Hon – Hiệu Quả Bất Ngờ · James Clear</div></div></div><p>Bài viết nói về sức mạnh của những thay đổi nhỏ được lặp lại mỗi ngày, xây dựng thói quen phù hợp thay vì đặt mục tiêu quá lớn, và duy trì kỷ luật trong học tập lẫn cuộc sống.</p><a class="button light" href="reflection-tran-quoc-hung.html">Mở bài phản hồi <span aria-hidden="true">↗</span></a></article>
            <article class="card member-card"><div class="member"><div class="avatar" aria-hidden="true">T</div><div><h3>Nguyễn Ngọc Thủy Tiên</h3><div class="muted">Đắc Nhân Tâm · Dale Carnegie</div></div></div><p>Bài viết tập trung vào lắng nghe, tôn trọng và thấu hiểu người khác; quan tâm chân thành, hạn chế phán xét và áp dụng những điều nhỏ như cảm ơn, ghi nhận trong giao tiếp.</p><a class="button light" href="reflection-nguyen-ngoc-thuy-tien.html">Mở bài phản hồi <span aria-hidden="true">↗</span></a></article>
          </div>`, "Tên thành viên và nội dung tóm tắt được lấy riêng từ từng tệp Markdown trong thư mục reflections.")}
      </div>`,
  },

  "action-plan.html": {
    title: "Kế hoạch hành động 90 ngày",
    eyebrow: "LỘ TRÌNH ĐỀ XUẤT TỪ KẾ HOẠCH KINH DOANH",
    desc: "Các hoạt động trong business_plan.md được sắp xếp thành ba chặng triển khai. Nguồn không ghi ngày hoặc thời lượng riêng cho từng chặng.",
    body: `
      <div class="wrap">
        <div class="assumption-strip"><b>Phạm vi nguồn:</b> các chặng dưới đây là cách sắp xếp đề xuất từ những hoạt động đã có trong kế hoạch; không phải lịch ngày hoặc thời hạn được nêu trong tài liệu.</div>
        ${section("BA CHẶNG TRIỂN KHAI", "Từ chuẩn bị đến bán hàng và điều chỉnh", `
          <div class="timeline">
            <article class="phase"><div class="phase-marker"><span>01</span></div><span class="tag">CHẶNG 1</span><h3>Chuẩn bị và thử nghiệm</h3><ul class="list"><li>Thử nghiệm sản phẩm nội bộ; rà soát công thức phối trộn để không bị hắc và không ố vải.</li><li>Chuẩn bị mẫu thử 2 ml để khách dùng trước khi mở seal chai chính.</li><li>Thiết kế nhãn mác, bao bì mẫu và dụng cụ đóng gói như các khoản khởi đầu trong kế hoạch.</li></ul></article>
            <article class="phase"><div class="phase-marker"><span>02</span></div><span class="tag">CHẶNG 2</span><h3>Tạo nội dung và tiếp cận</h3><ul class="list"><li>Xây dựng nội dung video ngắn chân thực về trải nghiệm sản phẩm.</li><li>Tiếp cận khách qua video TikTok cá nhân và các nhóm Facebook hội sinh viên trọ.</li><li>Giới thiệu ba dòng mùi hương theo tâm trạng đã nêu trong kế hoạch.</li></ul></article>
            <article class="phase"><div class="phase-marker"><span>03</span></div><span class="tag">CHẶNG 3</span><h3>Bán hàng và điều chỉnh</h3><ul class="list"><li>Bán qua TikTok Shop và mối quan hệ sinh viên.</li><li>Nếu kết quả bán thấp hơn dự kiến, tăng tương tác ở các nhóm Facebook “Nghiện Decor”, “Phòng Trọ Sinh Viên” hoặc tối ưu combo giảm giá.</li><li>Nếu nhà cung cấp tăng giá, đàm phán mua số lượng lớn hơn hoặc điều chỉnh nhẹ bao bì để giữ biên lợi nhuận.</li></ul></article>
          </div>`)}
        <div class="note">Business_plan.md không cung cấp ngày cụ thể, chỉ tiêu từng chặng hoặc lịch tuần. Vì vậy, trang không gán thời hạn chi tiết cho các hoạt động.</div>
      </div>`,
  },
};

const path = location.pathname.split("/").pop() || "index.html";
const page = pages[path] || pages["index.html"];
document.title = `${page.title} — THỞ LẠI`;
document.getElementById("app").innerHTML = `${nav(path)}
  <main id="main-content">
    <section class="hero wrap ${page.art ? "hero-home" : "hero-compact"}">
      <div class="hero-copy"><div class="eyebrow">${page.eyebrow}</div><h1>${page.title}</h1><p>${page.desc}</p>${path === "index.html" ? '<a class="button" href="business-plan.html">Khám phá dự án <span aria-hidden="true">→</span></a>' : ""}</div>
      ${page.art ? '<div class="hero-art" aria-hidden="true"><div class="halo halo-one"></div><div class="halo halo-two"></div><div class="bottle"><span>THỞ<br> LẠI</span></div><div class="leaf leaf-one"></div><div class="leaf leaf-two"></div></div>' : ""}
    </section>
    ${page.body}
  </main>${footer}`;
