import os

WATER_PATH = os.path.join("/Users/wanghc/Desktop/play_list/ffmpeg", "s.jpg")


# 加水印 参数：源视频路径、输出视频路径、水印文件路径
def add_watermark(in_path, out_path, WATER_PATH):
    output = os.path.join(out_path, "added-watermark.mp4")
    cmd = """ ffmpeg -y -i """ + in_path + """ -vf "movie=""" + WATER_PATH + """ [watermark];[in][watermark] overlay=10:10[out]" """ + output
    print(os.system(cmd))
    return output


# 截图
def screenshots(in_path, out_path):
    output = os.path.join(out_path, "shots.jpg")
    cmd = """ ffmpeg -y -ss 00:00:02 -i """ + in_path + """ -r 1 -vframes 1 -an -vcodec mjpeg """ + output
    print(os.system(cmd))


# 压缩 resolution: [("320x240","240p"),("640x360","360p"),("864x480","480p"),("960x720","720p")]
def video_compression(in_path, out_path, resolution):
    # resolution = [("320x240","240p"),("640x360","360p"),("864x480","480p"),("960x720","720p")]
    mp4_list = []
    for r, c, b in resolution:
        output = os.path.join(out_path, c + ".mp4")
        cmd = """ffmpeg -y -i """ + in_path + """ -s """ + r + """ -vcodec libx264 -b:v """+b+"""k -bufsize 100k """ + output
        print(os.system(cmd))
        mp4_list.append((output, c))
    return mp4_list


# 转换格式（oga）
def oga_conversion_format(mp4_list, out_path):
    for in_path, c in mp4_list:
        output = os.path.join(out_path, c + ".oga")
        cmd = """ffmpeg2theora """ + in_path + " -o " + output
        print(os.system(cmd))


# in_path : 源视频文件 | out_path : 输出文件夹
def handler(in_path, out_path):
    # 创建文件夹，定义路径
    srcenshots_path = os.path.join(out_path, "screenshots")
    mp4_path = os.path.join(out_path, "mp4_path")
    oga_path = os.path.join(out_path, "oga_path")
    path_list = ["screenshots", "mp4_path", "oga_path"]
    for i in path_list:
        if i in os.listdir(out_path):
            pass
        else:
            os.makedirs(os.path.join(out_path, i))

    resolution = [("320x240", "240p", "100"), ("640x360", "360p", "300")]
    screenshots(in_path, srcenshots_path)
    added_watermark = add_watermark(in_path, out_path, WATER_PATH)
    mp4_list = video_compression(added_watermark, mp4_path, resolution)
    oga_conversion_format(mp4_list, oga_path)

#
# if __name__ == "__main__":
#     # 输出文件夹
#     out_path = os.path.join("/Users/wanghc/Desktop/play_list/ffmpeg", "out_path2")
#     if "out_path" in os.listdir("/Users/wanghc/Desktop/play_list/ffmpeg"):
#         pass
#     else:
#         os.makedirs(out_path)
#     # 源视频文件路径
#     in_path = os.path.join("/Users/wanghc/Desktop/play_list/ffmpeg", "big.mp4")
#     # 水印文件路径
#
#     handler(in_path, out_path)
