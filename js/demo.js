function initSlider(slider) {
    const $slider = $(slider);

    $slider.each(function(i, el) {
        const $this = $(el);

        $this.on('init', (event, slick) => {
            setTimeout(() => {
                $this.slick('setPosition');
                $this.removeClass('loading');
            }, 500);
        });

        $this.slick({
            lazyLoad: 'ondemand',
        });
    });
}

// Set up observer
const observerConfig = {
    rootMargin: '0% 0% -5% 0%',
    threshold: 0
};

const observer = new IntersectionObserver((entries, self) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const item = entry.target;
            initSlider(item);
            self.unobserve(item);
        }
    }, observerConfig);
});

// Items to observe
const sliders = document.querySelectorAll('.js-slider');

// observe them
sliders.forEach(slider => {
    observer.observe(slider);
});