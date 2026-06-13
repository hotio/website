---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5714" onclick="CopyToClipboard('tag5714');return false;" class="tag-decoration">release</div><div id="tag28803" onclick="CopyToClipboard('tag28803');return false;" class="tag-decoration">release-4c759c7</div><div id="tag3546" onclick="CopyToClipboard('tag3546');return false;" class="tag-decoration">release-0.24.2057</div><div id="tag17750" onclick="CopyToClipboard('tag17750');return false;" class="tag-decoration">release-v0</div><div id="tag17192" onclick="CopyToClipboard('tag17192');return false;" class="tag-decoration">release-v0.24</div><div id="tag8078" onclick="CopyToClipboard('tag8078');return false;" class="tag-decoration">release-v0.24.2057</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/4c759c774cab60d4f9c81e3017dcf8e977b84993" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27459593181" target="_blank">2026-06-13 06:52:13</a></td></tr>
<tr><td><div id="tag14894" onclick="CopyToClipboard('tag14894');return false;" class="tag-decoration">testing</div><div id="tag2028" onclick="CopyToClipboard('tag2028');return false;" class="tag-decoration">testing-76f71d1</div><div id="tag13536" onclick="CopyToClipboard('tag13536');return false;" class="tag-decoration">testing-0.24.2057</div><div id="tag9329" onclick="CopyToClipboard('tag9329');return false;" class="tag-decoration">testing-v0</div><div id="tag23041" onclick="CopyToClipboard('tag23041');return false;" class="tag-decoration">testing-v0.24</div><div id="tag22529" onclick="CopyToClipboard('tag22529');return false;" class="tag-decoration">testing-v0.24.2057</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/76f71d1508f76b998fe6fbcf89352d5b2d1f13cf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27459595935" target="_blank">2026-06-13 06:52:22</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
