 // Controle do Modal
        const modal = document.getElementById('itemModal');
        const openModalBtns = document.querySelectorAll('[id^="add"]');
        const closeModalBtn = document.getElementById('closeModal');
        const cancelBtn = document.getElementById('cancelBtn');
        const saveItemBtn = document.getElementById('saveItemBtn');
        const modalTitle = document.getElementById('modalTitle');
        const itemForm = document.getElementById('itemForm');
        const itemStatus = document.getElementById('itemStatus');
        const statusLabel = document.getElementById('statusLabel');
        
        // Abrir modal para adicionar novo item
        openModalBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const type = this.id.replace('add', '').replace('Btn', '').toLowerCase();
                modalTitle.textContent = `Adicionar ${getCategoryName(type)}`;
                document.getElementById('itemCategory').value = type;
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Fechar modal
        function closeModal() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            itemForm.reset();
        }
        
        closeModalBtn.addEventListener('click', closeModal);
        cancelBtn.addEventListener('click', closeModal);
        
        // Fechar modal ao clicar fora
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Controle do toggle de status
        itemStatus.addEventListener('change', function() {
            statusLabel.textContent = this.checked ? 'Disponível' : 'Indisponível';
        });
        
        // Salvar item
        saveItemBtn.addEventListener('click', function() {
            // Aqui você implementaria a lógica para salvar o item
            alert('Item salvo com sucesso!');
            closeModal();
        });
        
        // Editar item
        document.querySelectorAll('.edit-item').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemCard = this.closest('.item-card');
                const itemName = itemCard.querySelector('.item-name').textContent;
                const itemPrice = itemCard.querySelector('.item-price').textContent.replace('R$ ', '');
                const itemDesc = itemCard.querySelector('.item-desc').textContent;
                
                modalTitle.textContent = `Editar ${itemName}`;
                document.getElementById('itemName').value = itemName;
                document.getElementById('itemPrice').value = itemPrice;
                document.getElementById('itemDescription').value = itemDesc;
                
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Excluir item
        document.querySelectorAll('.delete-item').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemCard = this.closest('.item-card');
                const itemName = itemCard.querySelector('.item-name').textContent;
                
                if(confirm(`Tem certeza que deseja excluir "${itemName}" permanentemente?`)) {
                    itemCard.style.animation = 'fadeOut 0.3s forwards';
                    setTimeout(() => {
                        itemCard.remove();
                    }, 300);
                }
            });
        });
          // Adicione este código ao seu arquivo JavaScript existente
    document.getElementById('logoutBtn').addEventListener('click', function(e) {
        e.preventDefault();
        
        // Aplica efeito visual de saída
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        // Redireciona após a transição
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 500); // Tempo deve corresponder à duração da transição
    });
        
        // Função auxiliar para obter nome da categoria
        function getCategoryName(type) {
            const categories = {
                'meal': 'Refeição',
                'drink': 'Bebida',
                'side': 'Acompanhamento'
            };
            return categories[type] || 'Item';
        }
        
        // Adicionar animação de fade out
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fadeOut {
                from { opacity: 1; transform: scale(1); }
                to { opacity: 0; transform: scale(0.95); }
            }
        `;
        document.head.appendChild(style);

        