from django.urls import path
from . import upload, play, comment, my_series, all_series, spider, editor, handle_video

urlpatterns = [
    # 我的课程 url
    path('my/series_list/', my_series.my_series_list_view, name='my_series_list'),
    path('my/series/<int:series>', my_series.my_series_view, name='my_series'),
    path('join/series/<int:series>', my_series.join_series_view, name='join_series'),
    path('mine/', my_series.mine_view, name='mine'),



    # 课程 URL
    path('all_series/', all_series.show_all_series_view, name='all_series'),
    path('show_series/<int:series>', all_series.show_series_view, name='show_series'),
    path('search/series/<int:kind>', all_series.search_series_for_kind_view, name='search_series_for_kind'),

    path('series/add/', upload.add_series_view, name='add_series'),
    path('my/series/<int:series>/add/curriculum/', upload.add_curriculum_view, name='add_curriculum'),

    # 播放 url
    path('jd_book/<int:id>/', spider.spider, name='jd_book'),
    path('play_file_obj/<int:id>/', play.play_file_obj, name='play_file_obj'),
    path('editor_play_file_obj/<int:id>/', play.editor_play_file_obj, name='editor_play_file_obj'),
    path('play_ajax_obj/<int:id>/', play.play_ajax_obj, name='play_ajax_obj'),
    path('editor_play_ajax_obj/<int:id>/', play.editor_play_ajax_obj, name='editor_play_ajax_obj'),
    path('play/<int:series>/', play.play_view, name='play'),
    path('play/<int:series>/post_comment/', comment.post_comment_view, name='post_comment'),

    # 审核人员url
    path('editor/determine/<int:status>/<int:cur_id>/', editor.determine_view, name='editor_determine'),
    path('editor/', editor.editor_index_view, name='editor_index'),
    path('editor/series_list/', editor.need_judge_series_view, name='editor_series_list'),
    path('editor/cur_list/<int:series_id>', editor.need_judge_cur_view, name='editor_cur_list'),

    path('handle_video/', handle_video.handle_video, name='handle_video'),

]
