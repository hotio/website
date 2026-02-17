---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag22326" onclick="CopyToClipboard('tag22326');return false;" class="tag-decoration">nightly</div><div id="tag10990" onclick="CopyToClipboard('tag10990');return false;" class="tag-decoration">nightly-f0694df</div><div id="tag29851" onclick="CopyToClipboard('tag29851');return false;" class="tag-decoration">nightly-33072154d215cc7b4de6c500b9102a88d9640eb1</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/f0694df17e2b1fc2f3696b9debcde80e1d04231b" target="_blank">Version update: d7b7377b42763f7f656afe19c24472d4fb0aac14 => 33072154d215cc7b4de6c500b9102a88d9640eb1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22104506202" target="_blank">2026-02-17 15:28:15</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14526" onclick="CopyToClipboard('tag14526');return false;" class="tag-decoration">release</div><div id="tag2844" onclick="CopyToClipboard('tag2844');return false;" class="tag-decoration">release-1f69d7e</div><div id="tag17997" onclick="CopyToClipboard('tag17997');return false;" class="tag-decoration">release-4.5.5</div><div id="tag10572" onclick="CopyToClipboard('tag10572');return false;" class="tag-decoration">release-v4</div><div id="tag23292" onclick="CopyToClipboard('tag23292');return false;" class="tag-decoration">release-v4.5</div><div id="tag21765" onclick="CopyToClipboard('tag21765');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/1f69d7e1525ce3adb7b09e80910ddcdc1041c120" target="_blank">Version update: 4.5.5 => 4.5.5</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21823457133" target="_blank">2026-02-09 11:35:21</a></td></tr>
<tr><td><div id="tag28326" onclick="CopyToClipboard('tag28326');return false;" class="tag-decoration">testing</div><div id="tag31044" onclick="CopyToClipboard('tag31044');return false;" class="tag-decoration">testing-5d44d33</div><div id="tag7877" onclick="CopyToClipboard('tag7877');return false;" class="tag-decoration">testing-5.0.0Beta1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/5d44d33cc946496273e73a120f9f17511e828312" target="_blank">Version update: 5.0.0Beta1 => 5.0.0Beta1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21823458878" target="_blank">2026-02-09 11:35:25</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

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
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
