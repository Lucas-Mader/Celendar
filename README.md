# Calendar
## A calendar that, given a starting and finishing date, paints these days with the color blue and the others, with orange.

detalhes - sem header

like_btn - {
  const handleToggleLikeBtn = () => {
    setLikeBtn(!like_btn);
    if (like_btn) {
      EngajamentoService.criar(
        {
          usuarioId: 1, // usuarioId
          videoId: video.uuid,
          curtida: true
        }
      )
    } else {
      EngajamentoService.criar(null)
    }

  }
}

Player - Usuário anônimo e logado - histórico
