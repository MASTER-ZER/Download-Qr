document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('download-button');
    const statusMessage = document.getElementById('status-message');
    
    // **ملاحظة مهمة:** بما أن رابط ميديا فاير يفتح في نافذة جديدة (target="_blank")
    // فإن المستخدم سيتم توجيهه فورًا. لكننا سنضيف هنا تأثير رسالة قبل ذلك.

    downloadButton.addEventListener('click', (event) => {
        // يمكنك إلغاء التوجيه الفوري هنا لو أردت إضافة شريط تحميل وهمي مثلاً
        // event.preventDefault(); 
        
        statusMessage.textContent = '...جارٍ التوجيه إلى صفحة التحميل في MediaFire';
        statusMessage.style.opacity = 1;
        
        // يمكننا إضافة تأخير بسيط لإظهار الرسالة قبل التوجيه الفعلي
        // ولكن لأننا نستخدم target="_blank"، سيفتح الرابط مباشرة
        
        // مثال: لو أردنا التوجيه بعد ثانية
        /*
        setTimeout(() => {
            window.open(downloadButton.href, '_blank');
        }, 1000);
        */
    });

    // تفاعل إضافي: لمعان خفيف للعنوان عند تحميل الصفحة
    const titleElement = document.querySelector('.title');
    titleElement.style.transition = 'text-shadow 1s ease-in-out';
    
    setTimeout(() => {
        titleElement.style.textShadow = '0 0 15px var(--gold-light), 0 0 30px var(--gold-dark)';
    }, 100);
});
