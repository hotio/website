---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class=header-links }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class=header-links }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class=header-links }  

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
<tr><td><div id="tag11972" onclick="CopyToClipboard('tag11972');return false;" class="tag-decoration">nightly</div><div id="tag11601" onclick="CopyToClipboard('tag11601');return false;" class="tag-decoration">nightly-17dcff49b25aaf3988bbc28f46175981908f9211</div><div id="tag23800" onclick="CopyToClipboard('tag23800');return false;" class="tag-decoration">nightly-7b45d43</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/7b45d437b3e3fcb9c7315da5a6bd57534e04402e" target="_blank">Version update: ae30be382b12db9fc0b4e3a8c4c76b29a1f4fd0e => 17dcff49b25aaf3988bbc28f46175981908f9211</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20754449033" target="_blank">2026-01-06 16:16:53</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9755" onclick="CopyToClipboard('tag9755');return false;" class="tag-decoration">release</div><div id="tag11713" onclick="CopyToClipboard('tag11713');return false;" class="tag-decoration">release-4.5.5</div><div id="tag19759" onclick="CopyToClipboard('tag19759');return false;" class="tag-decoration">release-9dd869c</div><div id="tag26081" onclick="CopyToClipboard('tag26081');return false;" class="tag-decoration">release-v4</div><div id="tag14906" onclick="CopyToClipboard('tag14906');return false;" class="tag-decoration">release-v4.5</div><div id="tag16084" onclick="CopyToClipboard('tag16084');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td>Upstream image update</td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20690836938" target="_blank">2026-01-04 09:26:53</a></td></tr>
<tr><td><div id="tag32734" onclick="CopyToClipboard('tag32734');return false;" class="tag-decoration">testing</div><div id="tag28326" onclick="CopyToClipboard('tag28326');return false;" class="tag-decoration">testing-4.6.0Beta2</div><div id="tag30316" onclick="CopyToClipboard('tag30316');return false;" class="tag-decoration">testing-78037c8</div></td><td>Pre-releases</td><td>Upstream image update</td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20690837366" target="_blank">2026-01-04 09:26:55</a></td></tr>
</tbody>
  </table>
</div>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="/javascripts/loadJSON-12.js"></script>

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
