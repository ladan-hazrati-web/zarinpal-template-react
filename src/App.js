import "./App.css";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import img1 from "../src/images/pg.jpg";
import img2 from "../src/images/social-image.jpg";
import img3 from "../src/images/zarincard.jpg";
import img4 from "../src/images/payout.jpg";
import img5 from "../src/images/zarinplus.jpg";
import Features from "./Features";
function App() {
  return (
    <main className="main">
      <Header />
      <Banner />
      <Main
        title="درگاه پرداخت اینترنتی"
        subTitle="مهندسی شده برای رشد و فروش بیش‌تر"
        text="درگاه پرداخت زرین‌پال، با اتصالِ همزمان به درگاه‌های متنوع و معتبر بانکی(PSPها)،کاربران را به سریع‌ترین و مطمئن‌ترین درگاه بانکی منتقل می‌کند و به واسطه‌ی قابلیت مسیردهی هوشمند، باعث افزایش درصد تراکنش‌های موفق می‌شود."
        textBtn1="ساخت درگاه پرداخت"
        textBtn2="بیش‌تر بدانید "
        image={img1}
        orderImg="order-1"
        orderText="order-2"
      />
      <Main
        title="زرین‌لینک"
        subTitle="پرداخت در شبکه‌های اجتماعی"
        text="زرین‌لینک با مدیریت فرآیند فروش به روشی هوشمندانه و سریع، باعث افزایش فروش محصولات و خدمات، از طریق شبکه‌های اجتماعی یا وب‌سایت می‌شود."
        textBtn1="ساخت زرین‌لینک"
        textBtn2="بیش‌تر بدانید "
        image={img2}
        orderImg="order-2"
        orderText="order-1"
      />
      <Main
        title="زرین کارت"
        subTitle="طلایی‌ترین کارتِ بانکی"
        text="زرین‌‌کارت یک کارتِ بانکی عضو شبکه‌‌ی شتاب و متصل به یک حساب بانکی است که از تمام ویژگی‌‌ها و امکانات یک حساب بانکی تمام عیار برخوردار است. زرین‌‌کارت این امکان را برای کاربران خود فراهم می‌‌سازد تا از تعرفه‌‌ی کارمزد کم‌‌تر در روزهای عادی و کارمزد رایگان در سه‌‌شنبه‌‌های طلاییِ زرین‌‌پال بهره‌‌مند شوند."
        textBtn1="درخواست زرین‌‌کارت"
        textBtn2="بیش‌تر بدانید "
        image={img3}
        orderImg="order-1"
        orderText="order-2"
        width="w-30"
      />
      <Main
        title="تسهیم"
        subTitle="پرداخت در شبکه‌های اجتماعی"
        text="زرین‌لینک با مدیریت فرآیند فروش به روشی هوشمندانه و سریع، باعث افزایش فروش محصولات و خدمات، از طریق شبکه‌های اجتماعی یا وب‌سایت می‌شود."
        textBtn1="ساخت زرین‌لینک"
        textBtn2="بیش‌تر بدانید "
        image={img4}
        orderImg="order-2"
        orderText="order-1"
      />
      <Main
        title="زرین پلاس"
        subTitle="ابزار هوشمند سوددهی"
        text="زرین‌پلاس محصولی از زرین‌پال، فرصتی فراهم کرده است تا کسب و کارها در هر اندازه و دسته‌بندی شغلی، با در دست داشتن ابزاری قدرتمند برای وفادارسازی مشتریان و افزایش فروش محصولات خود، بتوانند کسب و کار خود را به بهترین شکل توسعه و گسترش دهند و جایگاه برترین فروشگاه منطقه را به خود اختصاص دهند."
        textBtn1="پیوستن به زرین پلاس"
        textBtn2="بیش‌تر بدانید "
        image={img5}
        orderImg="order-1"
        orderText="order-2"
      />
      <Features />
      <Footer />
    </main>
  );
}

export default App;
