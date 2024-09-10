import "./Footer.css";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
function Footer() {
  return (
    <footer class="footer">
      <div>
        <h3>محصولات</h3>
        <ul>
          <li>زرین‌لینک</li>
          <li>درگاه پرداخت اینترنتی</li>
          <li>زرین‌کارت</li>
          <li>عیان</li>
          <li>استرداد وجه</li>
          <li>تسویه پیش از موعد</li>
          <li>تسهیم فردایی</li>
        </ul>
      </div>
      <div>
        <h3>آشنایی با زرین‌پال</h3>
        <ul>
          <li>تعرفه‌ها</li>
          <li>درباره ما</li>
          <li>سوالات متداول</li>
          <li>همکاری در فروش</li>
        </ul>
      </div>
      <div>
        <h3>ارتباط‌ بیشتر</h3>
        <ul>
          <li>تماس با ما</li>
          <li>قوانین و مقررات</li>
          <li>حریم ‌خصوصی</li>
        </ul>
      </div>
      <div>
        <h3>منابع</h3>
        <ul>
          <li>دریافت شماره شبا</li>
          <li>زرین‌بین</li>
          <li>توسعه‌دهندگان</li>
          <li>وبلاگ</li>
        </ul>
      </div>
      <div className="socials">
        <h3>زرین‌پال در شبکه‌های اجتماعی:</h3>
        <ul>
          <li>
            <FaTelegramPlane />
          </li>
          <li>
            <FaLinkedinIn />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
