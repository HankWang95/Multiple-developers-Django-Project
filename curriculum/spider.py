from django.shortcuts import render
from .models import Series
from lxml import etree
import requests


# 京东搜索关键字（数组） 返回url
def jd_seach(keywords):
    keyword = ""
    for i in keywords:
        if i == '#':
            keyword += '%20'
        else:
            keyword += i
    url = "https://search.jd.com/Search?keyword=" + keyword + "&enc=utf-8&"
    print(url)
    return url


def req_url(url):
    try:
        r = requests.get(url, timeout=10)
        r.raise_for_status()
        r.encoding = r.apparent_encoding
        return r.text
    except:
        return ""


def xpath_select(html, xpath_list, img_xpath_list):
    selector = etree.HTML(html)
    obj_list = []
    for i in range(len(xpath_list)):
        links = selector.xpath(xpath_list[i])
        obj = {}
        for link in links:
            obj['href'] = link.get('href')
            obj['title'] = link.get('title')

        # print(dir(link))
        links = selector.xpath(img_xpath_list[i])
        for link in links:
            obj['img'] = link.get('src')
        obj_list.append(obj)
    print(obj_list)
    return obj_list


def spider(request, id):
    keywords = Series.objects.get(pk=id).tag
    xpath_list = []
    img_xpath_list = []
    for i in range(3):
        xpath = '//*[@id="J_goodsList"]/ul/li[' + str(i + 1) + ']/div/div[1]/a'
        xpath_list.append(xpath)
        img_xpath = '//*[@id="J_goodsList"]/ul/li[' + str(i + 1) + ']/div/div[1]/a/img'
        img_xpath_list.append(img_xpath)
    url = jd_seach(keywords)
    html = req_url(url)
    obj_list = xpath_select(html, xpath_list, img_xpath_list)
    return render(request, "curriculum/spider.html", {'obj_list': obj_list})
