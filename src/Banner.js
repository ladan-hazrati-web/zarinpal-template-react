import "./Banner.css";
import logoBanner from "../src/images/home.svg";
import Buttons from "./Buttons";
function Banner() {
  return (
    <div className="banner">
      <div className="text-banner">
        <h2>
          بیش از ۱۴ سال <br />
          انتخاب مطمئنِ کسب و کارهای آنلاین
        </h2>
        <p>
          زرین‌پال، اولین پرداخت‌یار پیشگام کشور، با به‌کارگیری سبک و
          استانداردهای جدید در ارائه‌ی خدمات درگاه پرداخت اینترنتی، سرویس‌های
          متنوعی در حوزه‌ی پرداخت الکترونیک را برای کسب و کارها ارائه کرده است؛
          با این هدف که در افزایش سهم تجارت الکترونیکی در تولید ناخالص ملی و کمک
          به رشد و توسعه‌ی کسب‌وکارها، نقش سازنده‌‌ای ایفا کند.
        </p>
        <Buttons text1="ثبت نام" text2="ورود" />
      </div>
      <figure className="logo-banner">
        <img src={logoBanner} alt="home" />
      </figure>
    </div>
  );
}

export default Banner;
