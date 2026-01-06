---
hide:
  - toc
title: hotio/sabnzbd
---

--8<-- "includes/header-links.md"

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div id="tag16122" onclick="CopyToClipboard('tag16122');return false;" class="tag-decoration">nightly</div><div id="tag25131" onclick="CopyToClipboard('tag25131');return false;" class="tag-decoration">nightly-ae30be382b12db9fc0b4e3a8c4c76b29a1f4fd0e</div><div id="tag11224" onclick="CopyToClipboard('tag11224');return false;" class="tag-decoration">nightly-dae776c</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/dae776caed71d055d6068dea2a39c6ccfaf6f075" target="_blank">Version update: 13b10fd9bbb00624930b72065c32d6d7fe88fbb6 => ae30be382b12db9fc0b4e3a8c4c76b29a1f4fd0e</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20749290735" target="_blank">2026-01-06 13:10:41</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14086" onclick="CopyToClipboard('tag14086');return false;" class="tag-decoration">release</div><div id="tag28480" onclick="CopyToClipboard('tag28480');return false;" class="tag-decoration">release-4.5.5</div><div id="tag6961" onclick="CopyToClipboard('tag6961');return false;" class="tag-decoration">release-9dd869c</div><div id="tag30221" onclick="CopyToClipboard('tag30221');return false;" class="tag-decoration">release-v4</div><div id="tag5391" onclick="CopyToClipboard('tag5391');return false;" class="tag-decoration">release-v4.5</div><div id="tag5231" onclick="CopyToClipboard('tag5231');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td>Upstream image update</td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20690836938" target="_blank">2026-01-04 09:26:53</a></td></tr>
<tr><td><div id="tag5898" onclick="CopyToClipboard('tag5898');return false;" class="tag-decoration">testing</div><div id="tag10209" onclick="CopyToClipboard('tag10209');return false;" class="tag-decoration">testing-4.6.0Beta2</div><div id="tag26561" onclick="CopyToClipboard('tag26561');return false;" class="tag-decoration">testing-78037c8</div></td><td>Pre-releases</td><td>Upstream image update</td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20690837366" target="_blank">2026-01-04 09:26:55</a></td></tr>
</tbody>
  </table>
</div>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="/javascripts/loadJSON-11.js"></script>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name sabnzbd \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
