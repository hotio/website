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
<tr><td><div id="tag10265" onclick="CopyToClipboard('tag10265');return false;" class="tag-decoration">nightly</div><div id="tag4981" onclick="CopyToClipboard('tag4981');return false;" class="tag-decoration">nightly-a802cd9</div><div id="tag25909" onclick="CopyToClipboard('tag25909');return false;" class="tag-decoration">nightly-d25d857fc4c6d1d7c7bf9fffb718074d50cda325</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/a802cd92945d2d4144767abcad208503a8394a34" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33910425785" target="_blank">2026-09-04 19:17:46</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5497" onclick="CopyToClipboard('tag5497');return false;" class="tag-decoration">release</div><div id="tag5259" onclick="CopyToClipboard('tag5259');return false;" class="tag-decoration">release-046c8b0</div><div id="tag5031" onclick="CopyToClipboard('tag5031');return false;" class="tag-decoration">release-5.1.2</div><div id="tag24320" onclick="CopyToClipboard('tag24320');return false;" class="tag-decoration">release-v5</div><div id="tag6047" onclick="CopyToClipboard('tag6047');return false;" class="tag-decoration">release-v5.1</div><div id="tag25006" onclick="CopyToClipboard('tag25006');return false;" class="tag-decoration">release-v5.1.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/046c8b035e4a2da1cefa78ad73397a220cde3876" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33605402646" target="_blank">2026-09-02 07:48:06</a></td></tr>
<tr><td><div id="tag23749" onclick="CopyToClipboard('tag23749');return false;" class="tag-decoration">testing</div><div id="tag25355" onclick="CopyToClipboard('tag25355');return false;" class="tag-decoration">testing-83250c7</div><div id="tag23456" onclick="CopyToClipboard('tag23456');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag4518" onclick="CopyToClipboard('tag4518');return false;" class="tag-decoration">testing-v5</div><div id="tag16394" onclick="CopyToClipboard('tag16394');return false;" class="tag-decoration">testing-v5.1</div><div id="tag11153" onclick="CopyToClipboard('tag11153');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/83250c75a3e3a155345ab15df19201bdc2622892" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33910423620" target="_blank">2026-09-04 19:17:44</a></td></tr>
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
