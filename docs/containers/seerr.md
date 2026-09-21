---
hide:
  - toc
title: hotio/seerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag21848" onclick="CopyToClipboard('tag21848');return false;" class="tag-decoration">nightly</div><div id="tag27967" onclick="CopyToClipboard('tag27967');return false;" class="tag-decoration">nightly-609122a</div><div id="tag7729" onclick="CopyToClipboard('tag7729');return false;" class="tag-decoration">nightly-38581ca1c05f37b3f404571da34358660d1b667b</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/609122a41616ce989e501c5e1a546bfab97d3c84" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/35589260842" target="_blank">2026-09-21 10:32:09</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13495" onclick="CopyToClipboard('tag13495');return false;" class="tag-decoration">release</div><div id="tag19503" onclick="CopyToClipboard('tag19503');return false;" class="tag-decoration">release-6fe2059</div><div id="tag21449" onclick="CopyToClipboard('tag21449');return false;" class="tag-decoration">release-3.4.1</div><div id="tag20893" onclick="CopyToClipboard('tag20893');return false;" class="tag-decoration">release-v3</div><div id="tag6505" onclick="CopyToClipboard('tag6505');return false;" class="tag-decoration">release-v3.4</div><div id="tag2326" onclick="CopyToClipboard('tag2326');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/6fe205908b298ce010b34266c624b500a5da3c07" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/35378761782" target="_blank">2026-09-18 18:11:53</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
