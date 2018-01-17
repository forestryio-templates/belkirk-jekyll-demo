---
title: Exploring Forestry
date: 2017-09-25 09:09:13 +0000
categories:
- jekyll
layout: post
related_posts:
- _posts/2017-09-25-introduction.md
sub-title: A walkthrough of the Belkirk Site
---

Belkirk facilitates showing off many features of Forestry. The following walks you through the Belkirk site, and explains where to go for documentation on each feature!

## Overview
Belkirk is a static site built using one of the static site generators that Forestry supports -- Jekyll.

For more information on Jekyll, check out the docs!

## Content Management
Belkirk has five types of content, seen in the sidebar:

- **Pages**: one-off pages with a single purpose
- **People**: a collection of content to be used on [Staff pages](/about/people/)
- **Posts**: a collection of [blog posts](/posts/)
- **Projects**: a collection of [project](/projects/) pages
- **Publications**: a collection of content used on the [publications page](/publications/)

To learn how content management with Forestry, see the [documentation](https://forestry.io/docs/managing-content/managing-content/).

## Editing Content
Forestry has a fully-featured visual editor for Markdown and a rich interface for editing Front Matter.

To learn more about editing with Forestry, see the [documentation](https://forestry.io/docs/managing-content/editing-content/)

## Menus
Forestry supports creating custom menus for navigation in your sites. The Belkirk has three menus available:

- **Navigation**: the main navigation of the website
- **Footer**: a group of sitemap-style footer links

## Media
Forestry has a Media Library that supports the management of media files (Images, PDFs, code samples, and much more) from an uploads folder in your repository.

By default this is set to `/uploads/:year:/:month:/:day:/`, and is configurable from Site Settings.

To learn how to configure and use the Media Library, see the [documentation](https://forestry.io/docs/site-configuration/media-uploads/)

## Front Matter & Front Matter Templates
Forestry works by allowing developers to set up Front Matter Templates for the CMS. These tell the CMS what data to make available to editors when using the CMS, and provides a rich set of interface elements called Front Matter Fields.

To learn more about Front Matter Templates, see the [documentation](https://forestry.io/docs/site-configuration/front-matter-templates/).

## Settings
The CMS has a variety of configuration options for tailoring the CMS to your needs. These can be configured in Forestry from the settings page. They can also be configured by developers in the repository using the [Forestry's Config Files](https://forestry.io/docs/site-configuration/config-files/).

See the [Site Configuration documentation](https://forestry.io/docs/site-configuration/) for more information.

## Hosting
Forestry will build and deploy your site to a variety of static site hosting providers. This is set up from the hosting tab in the settings page of the CMS.

You can test this with the demo site using [GitHub pages](https://forestry.io/docs/deployment-and-management/deploying-with-github-pages/), [Amazon S3](https://forestry.io/docs/deployment-and-management/deploying-with-s3/), or [FTP](https://forestry.io/docs/deployment-and-management/deploying-your-site-with-ftp/)!