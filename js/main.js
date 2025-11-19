// ===================================
// Antigravity AI - Main JavaScript
// ===================================

(function() {
    'use strict';

    // ===================================
    // Smooth Scroll for Navigation Links
    // ===================================
    const initSmoothScroll = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Skip if it's just "#"
                if (href === '#') {
                    e.preventDefault();
                    return;
                }
                
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    // ===================================
    // Header Scroll Effect
    // ===================================
    const initHeaderScroll = () => {
        const header = document.querySelector('.header');
        let lastScroll = 0;
        
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            
            // Add shadow on scroll
            if (currentScroll > 10) {
                header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = 'none';
            }
            
            lastScroll = currentScroll;
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
    };

    // ===================================
    // Video Lazy Loading
    // ===================================
    const initVideoLazyLoading = () => {
        const videoPlayer = document.querySelector('#demoVideo');
        
        if (!videoPlayer) return;
        
        // Skip lazy loading for YouTube iframes (they handle it themselves)
        if (videoPlayer.tagName === 'IFRAME') {
            console.log('YouTube iframe detected - lazy loading handled by YouTube');
            return;
        }
        
        const observerOptions = {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        };
        
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Load video when it's about to come into view
                    const video = entry.target;
                    if (video.dataset.src) {
                        video.src = video.dataset.src;
                        video.load();
                    }
                    videoObserver.unobserve(video);
                }
            });
        }, observerOptions);
        
        videoObserver.observe(videoPlayer);
    };

    // ===================================
    // Video Player Controls Enhancement
    // ===================================
    const initVideoControls = () => {
        const videoPlayer = document.querySelector('#demoVideo');
        const videoContainer = document.querySelector('.video-container');
        
        if (!videoPlayer || !videoContainer) return;
        
        // For YouTube iframe, track when it loads
        if (videoPlayer.tagName === 'IFRAME') {
            console.log('YouTube video embedded successfully');
            
            // Track YouTube video impression
            if (typeof gtag !== 'undefined') {
                gtag('event', 'youtube_video_impression', {
                    'event_category': 'Video',
                    'event_label': 'Google Antigravity AI Demo',
                    'video_url': 'https://youtu.be/nTOVIGsqCuY'
                });
            }
            return;
        }
        
        // For regular HTML5 video
        // Hide placeholder when video starts playing
        videoPlayer.addEventListener('play', () => {
            const placeholder = document.querySelector('.video-placeholder');
            if (placeholder) {
                placeholder.style.opacity = '0';
                placeholder.style.pointerEvents = 'none';
            }
        });
        
        // Show placeholder if video errors
        videoPlayer.addEventListener('error', () => {
            const placeholder = document.querySelector('.video-placeholder');
            if (placeholder) {
                placeholder.style.opacity = '1';
                placeholder.style.pointerEvents = 'auto';
            }
        });
        
        // Keyboard controls
        videoPlayer.addEventListener('keydown', (e) => {
            switch(e.key) {
                case ' ':
                case 'k':
                    e.preventDefault();
                    if (videoPlayer.paused) {
                        videoPlayer.play();
                    } else {
                        videoPlayer.pause();
                    }
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    videoPlayer.currentTime -= 5;
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    videoPlayer.currentTime += 5;
                    break;
                case 'f':
                    e.preventDefault();
                    if (document.fullscreenElement) {
                        document.exitFullscreen();
                    } else {
                        videoContainer.requestFullscreen();
                    }
                    break;
                case 'm':
                    e.preventDefault();
                    videoPlayer.muted = !videoPlayer.muted;
                    break;
            }
        });
        
        // Log video analytics
        videoPlayer.addEventListener('play', () => {
            console.log('Video started playing');
            if (typeof gtag !== 'undefined') {
                gtag('event', 'video_start', {
                    'event_category': 'Video',
                    'event_label': 'Antigravity AI Demo'
                });
            }
        });
        
        videoPlayer.addEventListener('ended', () => {
            console.log('Video finished');
            if (typeof gtag !== 'undefined') {
                gtag('event', 'video_complete', {
                    'event_category': 'Video',
                    'event_label': 'Antigravity AI Demo'
                });
            }
        });
    };

    // ===================================
    // Intersection Observer for Animations
    // ===================================
    const initScrollAnimations = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
            observer.observe(card);
        });
        
        // Observe stat items
        const statItems = document.querySelectorAll('.stat-item');
        statItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = `all 0.6s ease-out ${index * 0.15}s`;
            observer.observe(item);
        });
        
        // Observe video section
        const videoSection = document.querySelector('.video-container-wrapper');
        if (videoSection) {
            videoSection.style.opacity = '0';
            videoSection.style.transform = 'translateY(30px)';
            videoSection.style.transition = 'all 0.8s ease-out';
            observer.observe(videoSection);
        }
    };

    // ===================================
    // Counter Animation for Stats
    // ===================================
    const initCounterAnimation = () => {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200; // Animation speed
        
        const animateCounter = (counter) => {
            const target = counter.textContent;
            
            // Handle special case for infinity symbol
            if (target === '∞') {
                return;
            }
            
            const isPercentage = target.includes('%');
            const isPlus = target.includes('+');
            const isMultiplier = target.includes('x');
            let numericValue;
            
            // Extract numeric value
            if (isMultiplier) {
                numericValue = parseFloat(target);
            } else if (isPercentage) {
                numericValue = parseFloat(target);
            } else if (target.includes('M')) {
                numericValue = parseFloat(target) * 1000;
            } else if (target.includes('K')) {
                numericValue = parseFloat(target);
            } else {
                numericValue = parseFloat(target);
            }
            
            const increment = numericValue / speed;
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                
                if (current < numericValue) {
                    if (target.includes('M')) {
                        counter.textContent = (current / 1000).toFixed(1) + 'M' + (isPlus ? '+' : '');
                    } else if (target.includes('K')) {
                        counter.textContent = Math.ceil(current) + 'K' + (isPlus ? '+' : '');
                    } else if (isPercentage) {
                        counter.textContent = current.toFixed(0) + '%';
                    } else if (isMultiplier) {
                        counter.textContent = current.toFixed(0) + 'x';
                    } else {
                        counter.textContent = Math.ceil(current);
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        };
        
        const observerOptions = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    animateCounter(entry.target);
                }
            });
        }, observerOptions);
        
        counters.forEach(counter => observer.observe(counter));
    };

    // ===================================
    // External Link Tracking
    // ===================================
    const initLinkTracking = () => {
        const externalLinks = document.querySelectorAll('a[href^="http"]');
        
        externalLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const url = link.getAttribute('href');
                const isDofollow = link.getAttribute('rel') === 'dofollow';
                
                // Log external link clicks (for analytics)
                console.log('External link clicked:', url, isDofollow ? '(dofollow)' : '');
                
                // You can add Google Analytics or other tracking here
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                        'event_category': 'External Link',
                        'event_label': url,
                        'dofollow': isDofollow
                    });
                }
            });
        });
    };

    // ===================================
    // Video Section Visibility Tracking
    // ===================================
    const initVideoSectionTracking = () => {
        const videoSection = document.querySelector('.video-section');
        
        if (!videoSection) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !videoSection.dataset.viewed) {
                    videoSection.dataset.viewed = 'true';
                    console.log('Video section viewed');
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'section_view', {
                            'event_category': 'Engagement',
                            'event_label': 'Video Section'
                        });
                    }
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(videoSection);
    };

    // ===================================
    // FAQ Accordion Functionality
    // ===================================
    const initFAQ = () => {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            if (!question) return;
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherQuestion = otherItem.querySelector('.faq-question');
                        if (otherQuestion) {
                            otherQuestion.setAttribute('aria-expanded', 'false');
                        }
                    }
                });
                
                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                    question.setAttribute('aria-expanded', 'false');
                } else {
                    item.classList.add('active');
                    question.setAttribute('aria-expanded', 'true');
                    
                    // Track FAQ interaction
                    const questionText = question.querySelector('span').textContent;
                    console.log('FAQ opened:', questionText);
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'faq_interaction', {
                            'event_category': 'Engagement',
                            'event_label': questionText
                        });
                    }
                }
            });
            
            // Keyboard accessibility
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    question.click();
                }
            });
        });
    };

    // ===================================
    // Performance Optimization
    // ===================================
    const optimizePerformance = () => {
        // Preload key resources
        const preloadVideo = () => {
            const videoPlayer = document.querySelector('#demoVideo');
            if (videoPlayer && videoPlayer.preload === 'none') {
                // Only preload metadata initially
                videoPlayer.preload = 'metadata';
            }
        };
        
        // Defer non-critical operations
        if ('requestIdleCallback' in window) {
            requestIdleCallback(preloadVideo);
        } else {
            setTimeout(preloadVideo, 1000);
        }
    };

    // ===================================
    // Accessibility Enhancements
    // ===================================
    const enhanceAccessibility = () => {
        // Ensure video controls are keyboard accessible
        const videoPlayer = document.querySelector('#demoVideo');
        if (videoPlayer) {
            videoPlayer.setAttribute('tabindex', '0');
            videoPlayer.setAttribute('role', 'region');
            videoPlayer.setAttribute('aria-label', 'Antigravity AI demonstration video');
        }
        
        // Add ARIA labels to navigation
        const nav = document.querySelector('.nav');
        if (nav) {
            nav.setAttribute('role', 'navigation');
            nav.setAttribute('aria-label', 'Main navigation');
        }
    };

    // ===================================
    // Initialize All Features
    // ===================================
    const init = () => {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }
        
        initSmoothScroll();
        initHeaderScroll();
        initVideoLazyLoading();
        initVideoControls();
        initScrollAnimations();
        initCounterAnimation();
        initLinkTracking();
        initVideoSectionTracking();
        initFAQ();
        optimizePerformance();
        enhanceAccessibility();
        
        // Log initialization
        console.log('%cAntigravity AI', 'color: #4285f4; font-size: 24px; font-weight: bold;');
        console.log('%cPowered by Gemini 3 Pro', 'color: #34a853; font-size: 14px;');
        console.log('Website initialized successfully ✓');
    };

    // Start initialization
    init();

    // ===================================
    // Expose utility functions globally if needed
    // ===================================
    window.AntigravityAI = {
        version: '2.0.0',
        init: init,
        features: {
            videoControls: initVideoControls,
            smoothScroll: initSmoothScroll,
            analytics: initLinkTracking
        }
    };

})();
