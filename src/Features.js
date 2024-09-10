import "./Features.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { TbArrowRampLeft } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
function Features() {
  return (
    <div className="feature-container">
      <div className="feature-section1">
        <h2>ویژگی‌های درگاه پرداخت زرین‌پال</h2>
        <p>
          درگاه پرداخت اینترنتی زرین‌پال، امکان مدیریت تراکنش‌های مالی در بستر
          وب را به راحتی امکان‌پذیر می‌کند و با پیاده‌سازی و اجرای راه‌کارهای
          هوشمندانه، باعث افزایش درصد تراکنش‌های موفق و سوددهی بیش‌تر می‌شود.
        </p>
      </div>
      <div className="feature-section2">
        <div className="article-section1">
          <article>
            <div className="icon">
              <BsPatchCheckFill />
              <h2>ضمانتِ پرداخت</h2>
            </div>
            <p>
              درگاه پرداخت زرین‌پال، تجربه‌ی پرداخت اینترنتی آسان، سریع و امن
              را به مشتریان کسب و کارهای آنلاین هدیه می‌دهد.
            </p>
          </article>
          <article>
            <div className="icon">
              <TbArrowRampLeft />
              <h2>مسیردهی هوشمند</h2>
            </div>
            <p>
              استانداردهای متفاوت زرین‌پال در بازه‌های زمانی مختلف، باعث می‌شود
              کاربران به بهترین درگاه پرداخت با بالاترین میزان تراکنش‌های موفق
              هدایت شوند.
            </p>
          </article>
        </div>
        <div className="article-section2">
          <article>
            <div className="icon">
              <MdOutlineSupportAgent />
              <h2>پشتیبانی ۲۴/۷</h2>
            </div>
            <p>
              هفت روزِ هفته، با پشتیبانی ۲۴ ساعته‌ی زرین‌پال، آماده‌ی پاسخ‌گویی
              و راهنمایی به کاربران هستیم.
            </p>
          </article>
          <article>
            <div className="icon">
              <MdOutlineSupportAgent />
              <h2>امنیتِ پرداخت</h2>
            </div>
            <p>
              درگاه امن زرین‌پال، ضمانتی برای امنیت اطلاعات بانکی افراد، هنگام
              پرداخت‌‌های اینترنتی آن‌هاست.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Features;
