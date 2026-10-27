---
hide:
  - toc
title: hotio/lidarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/lidarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/lidarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/lidarr/lidarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag4988" onclick="CopyToClipboard('tag4988');return false;" class="tag-decoration">nightly</div><div id="tag12745" onclick="CopyToClipboard('tag12745');return false;" class="tag-decoration">nightly-2cc5795</div><div id="tag19558" onclick="CopyToClipboard('tag19558');return false;" class="tag-decoration">nightly-3.2.0.5144</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/2cc5795a3871d5c22f48afe5206948163eaf0821" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/40540041835" target="_blank">2026-10-27 16:21:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5302" onclick="CopyToClipboard('tag5302');return false;" class="tag-decoration">release</div><div id="tag12757" onclick="CopyToClipboard('tag12757');return false;" class="tag-decoration">release-0da209f</div><div id="tag21317" onclick="CopyToClipboard('tag21317');return false;" class="tag-decoration">release-3.1.6.5079</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/0da209f0ff2a36a8b16a30117d38dce52cc6d270" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/40540059804" target="_blank">2026-10-27 16:21:07</a></td></tr>
<tr><td><div id="tag2883" onclick="CopyToClipboard('tag2883');return false;" class="tag-decoration">testing</div><div id="tag30827" onclick="CopyToClipboard('tag30827');return false;" class="tag-decoration">testing-4223e6c</div><div id="tag4834" onclick="CopyToClipboard('tag4834');return false;" class="tag-decoration">testing-3.2.0.5144</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/4223e6c622809a49d0d5c82db980b1c588a4fc5c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/40540049690" target="_blank">2026-10-27 16:21:02</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="lidarr" \
        -p 8686:8686 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8686/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/lidarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      lidarr:
        container_name: lidarr
        image: ghcr.io/hotio/lidarr
        ports:
          - "8686:8686"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8686/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
