import os


WATER_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'watermark.png')


# 加水印 参数：源视频路径、输出视频路径、水印文件路径
def add_watermark(in_path, out_path, WATER_PATH):
    output = os.path.join(out_path, "added-watermark.mp4")
    cmd = """ ffmpeg -y -i """ + in_path + """ -vf "movie=""" + WATER_PATH + """ [watermark];[in][watermark] overlay=10:10[out]" -strict -2 """ + output
    os.system(cmd)
    return output


# 截图
def screenshots(in_path, out_path):
    output = os.path.join(out_path, "shots.jpg")
    cmd = """ ffmpeg -y -ss 00:00:02 -i """ + in_path + """ -r 1 -vframes 1 -an -vcodec mjpeg """ + output
    os.system(cmd)


# 压缩 resolution: [("320x240","240p"),("640x360","360p"),("864x480","480p"),("960x720","720p")]
def video_compression(in_path, out_path, resolution):
    mp4_list = []
    for r, c, b in resolution:
        output = os.path.join(out_path, c + ".mp4")
        cmd = """ffmpeg -y -i """ + in_path + """ -s """ + r + """ -vcodec h264 -acodec aac -b:v """+b+"""k -bufsize 100k -strict -2 """ + output
        os.system(cmd)
        mp4_list.append((output, c))
    return mp4_list


# in_path : 源视频文件 | out_path : 输出文件夹
def handler(in_path, out_path):
    # 创建文件夹，定义路径
    srcenshots_path = os.path.join(out_path, "screenshots")
    mp4_path = os.path.join(out_path, "mp4_path")
    path_list = ["screenshots", "mp4_path", "oga_path"]
    for i in path_list:
        if i in os.listdir(out_path):
            pass
        else:
            os.makedirs(os.path.join(out_path, i))

    resolution = [("320x240", "240p", "200"), ("640x360", "360p", "400")]
    screenshots(in_path, srcenshots_path)
    video_compression(add_watermark(in_path, out_path, WATER_PATH), mp4_path, resolution)


