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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15224" onclick="CopyToClipboard('tag15224');return false;" class="tag-decoration">release</div><div id="tag9901" onclick="CopyToClipboard('tag9901');return false;" class="tag-decoration">release-d575e64</div><div id="tag1145" onclick="CopyToClipboard('tag1145');return false;" class="tag-decoration">release-0.24.887</div><div id="tag3328" onclick="CopyToClipboard('tag3328');return false;" class="tag-decoration">release-v0</div><div id="tag15845" onclick="CopyToClipboard('tag15845');return false;" class="tag-decoration">release-v0.24</div><div id="tag31372" onclick="CopyToClipboard('tag31372');return false;" class="tag-decoration">release-v0.24.887</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/d575e64a13080ab07a41c78beb43c25ff667af67" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21132217304" target="_blank">2026-01-19 09:30:31</a></td></tr>
<tr><td><div id="tag7573" onclick="CopyToClipboard('tag7573');return false;" class="tag-decoration">testing</div><div id="tag12204" onclick="CopyToClipboard('tag12204');return false;" class="tag-decoration">testing-0e63409</div><div id="tag24284" onclick="CopyToClipboard('tag24284');return false;" class="tag-decoration">testing-0.24.887</div><div id="tag5773" onclick="CopyToClipboard('tag5773');return false;" class="tag-decoration">testing-v0</div><div id="tag6067" onclick="CopyToClipboard('tag6067');return false;" class="tag-decoration">testing-v0.24</div><div id="tag9016" onclick="CopyToClipboard('tag9016');return false;" class="tag-decoration">testing-v0.24.887</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/0e6340956e7247904e37f1e3b2e74b2463d1851f" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21132217654" target="_blank">2026-01-19 09:30:32</a></td></tr>
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
