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
<tr><td><div id="tag12273" onclick="CopyToClipboard('tag12273');return false;" class="tag-decoration">nightly</div><div id="tag10964" onclick="CopyToClipboard('tag10964');return false;" class="tag-decoration">nightly-55e6922</div><div id="tag9505" onclick="CopyToClipboard('tag9505');return false;" class="tag-decoration">nightly-112d44944627c5c2680c3f15fbff63dd4c738e50</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/55e69221f404e2ff11bc3ac8f8a903545f415dc0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34603212396" target="_blank">2026-09-11 13:14:45</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27414" onclick="CopyToClipboard('tag27414');return false;" class="tag-decoration">release</div><div id="tag8295" onclick="CopyToClipboard('tag8295');return false;" class="tag-decoration">release-3dbe6de</div><div id="tag1596" onclick="CopyToClipboard('tag1596');return false;" class="tag-decoration">release-5.1.3</div><div id="tag10331" onclick="CopyToClipboard('tag10331');return false;" class="tag-decoration">release-v5</div><div id="tag29065" onclick="CopyToClipboard('tag29065');return false;" class="tag-decoration">release-v5.1</div><div id="tag24451" onclick="CopyToClipboard('tag24451');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/3dbe6ded8b67f01452b2b4fb083aaeed0d11bcd3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34491619709" target="_blank">2026-09-10 14:49:37</a></td></tr>
<tr><td><div id="tag24310" onclick="CopyToClipboard('tag24310');return false;" class="tag-decoration">testing</div><div id="tag23367" onclick="CopyToClipboard('tag23367');return false;" class="tag-decoration">testing-1813012</div><div id="tag463" onclick="CopyToClipboard('tag463');return false;" class="tag-decoration">testing-5.1.3</div><div id="tag3409" onclick="CopyToClipboard('tag3409');return false;" class="tag-decoration">testing-v5</div><div id="tag16570" onclick="CopyToClipboard('tag16570');return false;" class="tag-decoration">testing-v5.1</div><div id="tag1853" onclick="CopyToClipboard('tag1853');return false;" class="tag-decoration">testing-v5.1.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/18130124ef402ea8d1e011bf40a1b264b976037d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34491625895" target="_blank">2026-09-10 14:49:40</a></td></tr>
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
