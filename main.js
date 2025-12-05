const API_BASE_URL = "https://backend-stayahead.onrender.com";

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: toast => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
});

const translations = {
    ar: {
        lang_btn: "English",
        nav_home: "الرئيسية",
        nav_predict: "التنبؤ الذكي",
        nav_dashboard: "لوحة التحكم",
        nav_team: "الفريق",
        nav_contact: "تواصل معنا",

        hero_title: "لا تدع عملائك يرحلون.. <br> اكتشف المخاطر قبل حدوثها",
        hero_subtitle: "منصة ذكية تعتمد على خوارزميات التعلم الآلي لتحليل سلوك العملاء والتنبؤ باحتمالية إلغاء الاشتراك، مما يمنحك القوة لاتخاذ القرار الصحيح في الوقت المناسب.",
        hero_cta: "ابدأ التجربة الآن",

        how_title: "كيف يعمل النظام؟",
        how_subtitle: "رحلة البيانات من الإدخال وحتى اتخاذ القرار",
        how_step1_title: "1. جمع البيانات",
        how_step1_desc: "نقوم بجمع وتحليل بيانات العميل مثل: مدة الاشتراك، نوع العقد، نمط الاستخدام، والفواتير الشهرية.",
        how_step2_title: "2. التحليل الذكي",
        how_step2_desc: "يقوم نموذج الذكاء الاصطناعي بمعالجة البيانات ومقارنتها بآلاف السجلات السابقة لاكتشاف الأنماط الخفية.",
        how_step3_title: "3. التنبؤ والقرار",
        how_step3_desc: "نقدم لك نسبة دقيقة لاحتمالية \"الانسحاب\"، مع تصنيف مستوى الخطر (عالي، متوسط، منخفض) لتتخذ الإجراء.",

        why_title: "لماذا Stay Ahead؟",
        why_speed_title: "سرعة فائقة",
        why_speed_desc: "نتائج فورية في أقل من ثانية واحدة لكل عميل.",
        why_accuracy_title: "دقة عالية",
        why_accuracy_desc: "خوارزميات مدربة على بيانات ضخمة لضمان دقة التوقعات.",
        why_actions_title: "إجراءات استباقية",
        why_actions_desc: "لا نكتفي بالتحليل، بل نساعدك في الحفاظ على العميل.",

        footer_text: "&copy; 2025 Stay Ahead Project. جميع الحقوق محفوظة لفريق الابتكار.",

        dashboard_title: "مركز مراقبة المخاطر",
        dashboard_subtitle: "مراقبة حية للعملاء المصنفين تحت فئة \"خطر مرتفع\"",
        th_customer: "اسم العميل",
        th_tenure: "مدة الاشتراك",
        th_contract: "نوع العقد",
        th_payment: "طريقة الدفع",
        th_usage: "معدل الاستخدام",
        th_churn_prob: "احتمالية المغادرة",
        th_risk: "مستوى الخطر",
        th_action: "الإجراء المقترح",
        dashboard_loading: "جاري الاتصال بقاعدة البيانات...",
        dashboard_nodata: "لا يوجد بيانات لعرضها حالياً",
        dashboard_server_off: "تأكد من تشغيل السيرفر",

        contact_title: "تواصل معنا",
        contact_name_label: "الاسم",
        contact_email_label: "البريد",
        contact_message_label: "الرسالة",
        contact_submit: "إرسال",

        predict_title: "فحص عميل جديد (تحليل شامل)",
        predict_intro: "من هنا يمكن لشركات SaaS إدخال بيانات عميل جديد أو قائم، للحصول على تحليل احتمالية إلغاء الاشتراك، وتحديد مستوى الخطر، واقتراح الخطوة المناسبة قبل أن يغادر العميل.",
        predict_section1: "<i class=\"fa-solid fa-user\"></i> 1. المعلومات الشخصية",
        predict_section2: "<i class=\"fa-solid fa-file-signature\"></i> 2. تفاصيل الاشتراك",
        predict_section3: "<i class=\"fa-solid fa-box-open\"></i> 3. الخدمات الإضافية",
        predict_section4: "<i class=\"fa-solid fa-money-check-dollar\"></i> 4. الفوترة والدفع",

        label_gender: "الجنس",
        label_senior: "كبار السن؟",
        label_partner: "هل لديه شريك؟",
        label_dependents: "هل لديه معالين (أطفال)؟",
        label_tenure: "مدة الاشتراك (أشهر)",
        label_contract: "نوع العقد",
        label_plan_type: "نوع الإنترنت",
        label_phone_service: "خدمة الهاتف؟",
        label_online_security: "أمان إلكتروني (Security)",
        label_online_backup: "نسخ احتياطي (Backup)",
        label_device_protection: "حماية الجهاز",
        label_tech_support: "دعم فني",
        label_feature_a: "بث تلفزيوني (TV)",
        label_feature_b: "بث أفلام (Movies)",
        label_paperless: "فاتورة بلا ورق؟",
        label_payment_method: "طريقة الدفع",
        label_monthly_charges: "الفاتورة الشهرية ($)",
        label_total_charges: "إجمالي المدفوعات ($)",

        option_male: "ذكر (Male)",
        option_female: "أنثى (Female)",
        option_yes: "نعم",
        option_no: "لا",
        option_contract_month: "شهري (قابل للإلغاء)",
        option_contract_one: "سنة واحدة",
        option_contract_two: "سنتين (طويل الأمد)",
        option_plan_fiber: "ألياف بصرية (Fiber)",
        option_plan_dsl: "DSL",
        option_plan_none: "لا يوجد",
        option_payment_echeck: "شيك إلكتروني",
        option_payment_card: "بطاقة ائتمانية",
        option_payment_bank: "تحويل بنكي",
        option_payment_mail: "شيك بريدي",

        predict_button: "تحليل البيانات الكاملة",
        result_title: "<i class=\"fa-solid fa-magnifying-glass-chart\"></i> نتيجة التحليل",
        result_hint: "هذه النتيجة موجهة لدعم قرارات فرق المبيعات وخدمة العملاء في شركات SaaS، ولا تُعد قرارًا نهائيًا بحد ذاتها.",
        result_prob_label: "احتمالية المغادرة:",

        team_title: "فريق العمل",
        team_subtitle: "وراء Stay Ahead فريق متكامل يجمع بين تطوير الواجهات، والذكاء الاصطناعي، وتحليل البيانات، لبناء حلول تخدم شركات الاشتراكات الرقمية.",
        member1_role: "Frontend Developer",
        member1_bio: "مسؤول عن تجربة المستخدم، بناء الواجهات الأمامية، وربط المنصة مع نماذج التنبؤ لتقديم تجربة سلسلة لشركات SaaS.",
        member2_role: "Backend & Integration",
        member2_bio: "مسؤول عن تصميم الـ APIs، إدارة الاتصال بقواعد البيانات، وضمان تكامل نموذج الذكاء الاصطناعي مع النظام التشغيلي.",
        member3_role: "Data Analyst",
        member3_bio: "يعمل على تنظيف البيانات، تحليلها، وبناء لوحات مراقبة تساعد فرق العمل على فهم سلوك العملاء واتخاذ قرارات مدعومة بالبيانات.",
        member4_role: "ML Engineer",
        member4_bio: "يطوّر نماذج التنبؤ بالمغادرة، ويعمل على تحسين دقة النماذج وتقييمها باستخدام أحدث تقنيات تعلم الآلة.",
        member5_role: "ML Engineer",
        member5_bio: "تساهم في تصميم الـ features وتحسين أداء النموذج بما يضمن قراءة أدق لسلوك المستخدمين في منصات الاشتراك.",
        member6_role: "ML Engineer",
        member6_bio: "تركز على تجربة التدريب، ضبط المعاملات، واختبار النماذج في سيناريوهات واقعية لشركات SaaS."
    },
    en: {
        lang_btn: "عربي",
        nav_home: "Home",
        nav_predict: "Smart Prediction",
        nav_dashboard: "Dashboard",
        nav_team: "Team",
        nav_contact: "Contact",

        hero_title: "Don't let your customers churn...<br>Predict the risk before it happens",
        hero_subtitle: "An AI-powered platform that analyzes customer behavior and predicts churn probability, giving your team the power to act before it is too late.",
        hero_cta: "Start the demo",

        how_title: "How does it work?",
        how_subtitle: "From raw data to actionable decisions",
        how_step1_title: "1. Data collection",
        how_step1_desc: "We collect and analyze key customer attributes such as tenure, contract type, usage patterns, and billing history.",
        how_step2_title: "2. Smart analysis",
        how_step2_desc: "The AI model processes the data and compares it with thousands of historical records to uncover hidden patterns.",
        how_step3_title: "3. Prediction & action",
        how_step3_desc: "We provide an accurate churn probability and a risk level (High, Medium, Low) to guide your next move.",

        why_title: "Why Stay Ahead?",
        why_speed_title: "Lightning-fast",
        why_speed_desc: "Predictions in less than a second per customer.",
        why_accuracy_title: "High accuracy",
        why_accuracy_desc: "Models trained on rich datasets to ensure reliable predictions.",
        why_actions_title: "Proactive actions",
        why_actions_desc: "We do not stop at prediction; we help you retain the customer.",

        footer_text: "&copy; 2025 Stay Ahead Project. All rights reserved for the innovation team.",

        dashboard_title: "Risk Monitoring Center",
        dashboard_subtitle: "Live monitoring for customers classified as \"High Risk\"",
        th_customer: "Customer ID",
        th_tenure: "Tenure",
        th_contract: "Contract type",
        th_payment: "Payment method",
        th_usage: "Usage score",
        th_churn_prob: "Churn probability",
        th_risk: "Risk level",
        th_action: "Suggested action",
        dashboard_loading: "Connecting to the database...",
        dashboard_nodata: "No data to display at the moment",
        dashboard_server_off: "Please make sure the server is running",

        contact_title: "Contact us",
        contact_name_label: "Name",
        contact_email_label: "Email",
        contact_message_label: "Message",
        contact_submit: "Send",

        predict_title: "New customer assessment (Full analysis)",
        predict_intro: "Here SaaS companies can simulate a new or existing customer to estimate churn risk, understand the risk level, and decide on the best action before churn happens.",
        predict_section1: "<i class=\"fa-solid fa-user\"></i> 1. Personal information",
        predict_section2: "<i class=\"fa-solid fa-file-signature\"></i> 2. Subscription details",
        predict_section3: "<i class=\"fa-solid fa-box-open\"></i> 3. Add-on services",
        predict_section4: "<i class=\"fa-solid fa-money-check-dollar\"></i> 4. Billing & payments",

        label_gender: "Gender",
        label_senior: "Senior citizen?",
        label_partner: "Has a partner?",
        label_dependents: "Has dependents?",
        label_tenure: "Tenure (months)",
        label_contract: "Contract type",
        label_plan_type: "Internet plan",
        label_phone_service: "Phone service?",
        label_online_security: "Online security",
        label_online_backup: "Online backup",
        label_device_protection: "Device protection",
        label_tech_support: "Tech support",
        label_feature_a: "TV streaming",
        label_feature_b: "Movie streaming",
        label_paperless: "Paperless billing?",
        label_payment_method: "Payment method",
        label_monthly_charges: "Monthly charges ($)",
        label_total_charges: "Total charges ($)",

        option_male: "Male",
        option_female: "Female",
        option_yes: "Yes",
        option_no: "No",
        option_contract_month: "Month-to-month",
        option_contract_one: "One year",
        option_contract_two: "Two years",
        option_plan_fiber: "Fiber optic",
        option_plan_dsl: "DSL",
        option_plan_none: "No internet",
        option_payment_echeck: "Electronic check",
        option_payment_card: "Credit card",
        option_payment_bank: "Bank transfer",
        option_payment_mail: "Mailed check",

        predict_button: "Run full analysis",
        result_title: "<i class=\"fa-solid fa-magnifying-glass-chart\"></i> Analysis result",
        result_hint: "This output is designed to support sales and success teams in SaaS companies. It should guide, not replace, human decisions.",
        result_prob_label: "Churn probability:",

        team_title: "Our team",
        team_subtitle: "Behind Stay Ahead is a cross-functional team combining frontend, AI, and data analytics to build solutions for subscription-based businesses.",
        member1_role: "Frontend Developer",
        member1_bio: "Leads the user experience, frontend implementation, and the integration between the web app and the churn prediction models for SaaS clients.",
        member2_role: "Backend & Integration",
        member2_bio: "Owns the API layer, database connectivity, and robust integration between the AI model and the production stack.",
        member3_role: "Data Analyst",
        member3_bio: "Cleans and explores the data, and builds dashboards that help teams understand customer behavior and make data-driven decisions.",
        member4_role: "ML Engineer",
        member4_bio: "Develops and evaluates churn prediction models using modern machine learning techniques.",
        member5_role: "ML Engineer",
        member5_bio: "Designs features and improves model performance to better capture real usage patterns in subscription platforms.",
        member6_role: "ML Engineer",
        member6_bio: "Focuses on training workflows, hyper-parameter tuning, and realistic evaluation for SaaS scenarios."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'ar';
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyLanguage(savedLang);
    applyTheme(savedTheme);

    const themeBtn = document.getElementById('theme-toggle');
    const langBtn = document.getElementById('lang-toggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    if (langBtn) langBtn.addEventListener('click', toggleLanguage);

    if (document.getElementById('users-table-body')) fetchHighRiskUsers();
    
    const pForm = document.getElementById('predict-form');
    if (pForm) {
        pForm.addEventListener('submit', event => {
            event.preventDefault();
            handlePredict(event);
        });
    }
});

function toggleTheme() {
    const isDark = document.body.classList.contains('dark-mode');
    applyTheme(isDark ? 'light' : 'dark');
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', theme);
    const icon = document.querySelector('#theme-toggle i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
}

function toggleLanguage() {
    const current = localStorage.getItem('lang') || 'ar';
    const next = current === 'ar' ? 'en' : 'ar';
    applyLanguage(next);
}

function applyLanguage(lang) {
    const dict = translations[lang] || translations.ar;
    localStorage.setItem('lang', lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-en', lang === 'en');

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn && dict.lang_btn) {
        langBtn.textContent = dict.lang_btn;
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = dict[key];
        if (!val) return;
        const tag = el.tagName.toLowerCase();
        if (tag === 'input' || tag === 'textarea') {
            el.setAttribute('placeholder', val);
        } else {
            el.innerHTML = val;
        }
    });
}

async function handlePredict(e) {
    const form = e.target;
    const formData = new FormData(form);
    const btn = form.querySelector('button');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري التحليل...';
    btn.disabled = true;

    const payload = {
        customer_id: "WEB_USER_" + Math.floor(Math.random() * 10000),
        gender: formData.get('gender'),
        is_senior_user: formData.get('senior'),
        has_partner: formData.get('partner'),
        has_dependents: formData.get('dependents'),
        subscription_tenure_months: parseInt(formData.get('tenure')),
        ProductEnabled: formData.get('phoneService'),
        PlanType: formData.get('planType'),
        billing_cycle_type: formData.get('contract'),
        OnlineSecurity: formData.get('onlineSecurity'),
        OnlineBackup: formData.get('onlineBackup'),
        DeviceProtection: formData.get('deviceProtection'),
        TechSupport: formData.get('techSupport'),
        FeatureA: formData.get('featureA'),
        FeatureB: formData.get('featureB'),
        PaperlessBilling: formData.get('paperless'),
        PaymentMethod: formData.get('paymentMethod'),
        MonthlyCharges: parseFloat(formData.get('monthlyCharges')),
        TotalCharges: parseFloat(formData.get('totalCharges'))
    };

    try {
        const response = await fetch(`${API_BASE_URL}/predict`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error("Connection Error");
        const result = await response.json();
        
        const resultBox = document.getElementById('prediction-result');
        const probValue = document.getElementById('prob-value');
        const riskBadge = document.getElementById('risk-badge');

        resultBox.classList.remove('hidden');
        riskBadge.innerText = result.ai_decision;

        if (result.ai_decision === 'High') {
            probValue.innerText = "مرتفعة جداً (High Risk)";
            probValue.style.color = "#e74c3c";
            riskBadge.style.background = "#ffebee";
            riskBadge.style.color = "#c62828";
            
            Swal.fire({
                title: '⚠️ تحذير عالي الخطورة!',
                text: 'الذكاء الاصطناعي يتوقع مغادرة هذا العميل بنسبة كبيرة!',
                icon: 'warning',
                confirmButtonText: 'فهمت، اعرض التفاصيل',
                confirmButtonColor: '#e74c3c',
                background: '#fff',
                backdrop: 'rgba(231, 76, 60, 0.1)'
            });

        } else if (result.ai_decision === 'Medium') {
            probValue.innerText = "متوسطة (Medium Risk)";
            probValue.style.color = "#f39c12";
            riskBadge.style.background = "#fff3e0";
            riskBadge.style.color = "#ef6c00";
        } else {
            probValue.innerText = "منخفضة (Safe Customer)";
            probValue.style.color = "#2ecc71";
            riskBadge.style.background = "#e8f5e9";
            riskBadge.style.color = "#2e7d32";
            
            Toast.fire({
                icon: 'success',
                title: 'العميل في وضع آمن ومستقر'
            });
        }
        
        resultBox.scrollIntoView({ behavior: 'smooth' });

    } catch (error) {
        console.error(error);
        Swal.fire({
            icon: 'error',
            title: 'فشل الاتصال!',
            text: 'تأكد أن السيرفر (main.py) يعمل في الخلفية',
            confirmButtonText: 'حسناً',
            confirmButtonColor: '#333'
        });
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

async function fetchHighRiskUsers() {
    const spinner = document.getElementById('loading-spinner');
    try {
        const res = await fetch(`${API_BASE_URL}/high-risk-users`);
        if (!res.ok) throw new Error("Failed");
        
        const users = await res.json();
        const tbody = document.getElementById('users-table-body');
        
        if (spinner) spinner.style.display = 'none';
        tbody.innerHTML = '';

        if (users.length === 0) {
            const dict = translations[localStorage.getItem('lang') || 'ar'];
            const txt = dict.dashboard_nodata || 'لا يوجد بيانات لعرضها حالياً';
            tbody.innerHTML = `<tr><td colspan="8" style="text-align:center">${txt}</td></tr>`;
            return;
        }

        users.forEach(user => {
            let riskBadge = '';
            let actionSuggestion = '';
            let btnClass = '';

            if (user.risk_category === 'High') {
                riskBadge = '<span style="background:#ffebee; color:#c62828; padding:5px 12px; border-radius:15px; font-weight:bold">High</span>';
                actionSuggestion = 'Call Immediately + Discount';
                btnClass = 'background:#e74c3c;';
            } else if (user.risk_category === 'Medium') {
                riskBadge = '<span style="background:#fff3e0; color:#ef6c00; padding:5px 12px; border-radius:15px; font-weight:bold">Medium</span>';
                actionSuggestion = 'Follow-up Email';
                btnClass = 'background:#f39c12;';
            } else {
                riskBadge = '<span style="background:#e8f5e9; color:#2e7d32; padding:5px 12px; border-radius:15px; font-weight:bold">Low</span>';
                actionSuggestion = 'Upgrade Recommendation for the Client';
                btnClass = 'background:#2ecc71;';
            }

            tbody.innerHTML += `
                <tr style="transition: 0.2s; border-bottom: 1px solid #eee;">
                    <td style="font-weight:bold; color:#555">${user.customer_id}</td>
                    <td>${user.tenure || '-'} شهر</td>
                    <td>${user.contract || '-'}</td>
                    <td>${user.payment_method || '-'}</td>
                    <td>${(user.churn_probability * 100).toFixed(1)}%</td>
                    <td>${riskBadge}</td>
                    <td style="font-size:0.9rem; color:#444;">${actionSuggestion}</td>
                    <td>
                        <button onclick="takeAction('${user.customer_id}', '${user.risk_category}')" 
                                style="${btnClass} color:white; border:none; padding:8px 15px; border-radius:6px; cursor:pointer; font-weight:bold; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                            send
                        </button>
                    </td>
                </tr>`;
        });
    } catch (e) {
        console.error(e);
        if (spinner) {
            const dict = translations[localStorage.getItem('lang') || 'ar'];
            spinner.innerHTML = dict.dashboard_server_off || 'تأكد من تشغيل السيرفر';
        }
    }
}

function takeAction(id, risk) {
    let title = '';
    let text = '';
    let confirmBtnColor = '';

    if (risk === 'High') {
        title = 'تأكيد الاتصال الطارئ';
        text = `هل أنت متأكد من إرسال تنبيه لفريق المبيعات للعميل ${id}؟`;
        confirmBtnColor = '#e74c3c';
    } else if (risk === 'Medium') {
        title = 'Email Sending';
        text = `A customer satisfaction survey will be sent to the client ${id}.`;
        confirmBtnColor = '#f39c12';
    } else {
        title = 'إرسال عرض ترويجي';
        text = `سيتم إرسال كود خصم للترقية للعميل ${id}`;
        confirmBtnColor = '#2ecc71';
    }

    Swal.fire({
        title,
        text,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: confirmBtnColor,
        cancelButtonColor: '#aaa',
        confirmButtonText: 'نعم، نفذ الإجراء',
        cancelButtonText: 'إلغاء',
        reverseButtons: true
    }).then(result => {
        if (result.isConfirmed) {
            Swal.fire(
                'تم التنفيذ!',
                'تم تسجيل الإجراء في النظام بنجاح.',
                'success'
            );
        }
    });
}






