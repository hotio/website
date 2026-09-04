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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14022" onclick="CopyToClipboard('tag14022');return false;" class="tag-decoration">release</div><div id="tag16083" onclick="CopyToClipboard('tag16083');return false;" class="tag-decoration">release-8592e58</div><div id="tag8444" onclick="CopyToClipboard('tag8444');return false;" class="tag-decoration">release-0.24.2531</div><div id="tag23984" onclick="CopyToClipboard('tag23984');return false;" class="tag-decoration">release-v0</div><div id="tag21700" onclick="CopyToClipboard('tag21700');return false;" class="tag-decoration">release-v0.24</div><div id="tag23594" onclick="CopyToClipboard('tag23594');return false;" class="tag-decoration">release-v0.24.2531</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/8592e58c9b89cc320a6b3fdd65ee9f70f4ec42f7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/33914587541" target="_blank">2026-09-04 20:06:41</a></td></tr>
<tr><td><div id="tag5084" onclick="CopyToClipboard('tag5084');return false;" class="tag-decoration">testing</div><div id="tag14227" onclick="CopyToClipboard('tag14227');return false;" class="tag-decoration">testing-9c1119f</div><div id="tag5493" onclick="CopyToClipboard('tag5493');return false;" class="tag-decoration">testing-0.24.2531</div><div id="tag31694" onclick="CopyToClipboard('tag31694');return false;" class="tag-decoration">testing-v0</div><div id="tag12360" onclick="CopyToClipboard('tag12360');return false;" class="tag-decoration">testing-v0.24</div><div id="tag7599" onclick="CopyToClipboard('tag7599');return false;" class="tag-decoration">testing-v0.24.2531</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/9c1119f817eaaf13c49b032edb9103de32cb556e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/33914596143" target="_blank">2026-09-04 20:06:50</a></td></tr>
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
