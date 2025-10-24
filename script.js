document.addEventListener('DOMContentLoaded', () => {
    // 모바일 메뉴 토글
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // 모바일 메뉴 링크 클릭 시 메뉴 닫기
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // 모달 열기/닫기
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const openModalButtons = document.querySelectorAll('.openModal');
    const closeModalButton = document.getElementById('closeModal');
    
    const openModal = () => modal.classList.remove('hidden');
    const closeModal = () => modal.classList.add('hidden');

    openModalButtons.forEach(btn => btn.addEventListener('click', openModal));
    closeModalButton.addEventListener('click', closeModal);
    
    // 모달 바깥 클릭 시 닫기
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // 모달 컨텐츠 클릭 시 닫기 방지
    modalContent.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Esc 키로 모달 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // 모바일 메뉴의 '사전 등록하기' 버튼도 모달 열기
    mobileMenu.querySelector('.openModal').addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        openModal();
    });

    // 가짜 폼 제출 핸들러 (데모용)
    const signupForm = document.getElementById('signupForm');
    const formButtonText = document.getElementById('formButtonText');
    const formSpinner = document.getElementById('formSpinner');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 로딩 상태
        formButtonText.classList.add('hidden');
        formSpinner.classList.remove('hidden');
        formSuccess.classList.add('hidden');
        formError.classList.add('hidden');
        
        // 1초 후 성공 (시뮬레이션)
        setTimeout(() => {
            formButtonText.classList.remove('hidden');
            formSpinner.classList.add('hidden');
            formSuccess.classList.remove('hidden');
            signupForm.reset();

            // 3초 후 성공 메시지 숨기고 모달 닫기
            setTimeout(() => {
                formSuccess.classList.add('hidden');
                closeModal();
            }, 2000);

        }, 1000);
    });
});
