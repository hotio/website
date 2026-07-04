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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14080" onclick="CopyToClipboard('tag14080');return false;" class="tag-decoration">release</div><div id="tag5892" onclick="CopyToClipboard('tag5892');return false;" class="tag-decoration">release-8d971c0</div><div id="tag27415" onclick="CopyToClipboard('tag27415');return false;" class="tag-decoration">release-0.24.2173</div><div id="tag27555" onclick="CopyToClipboard('tag27555');return false;" class="tag-decoration">release-v0</div><div id="tag32185" onclick="CopyToClipboard('tag32185');return false;" class="tag-decoration">release-v0.24</div><div id="tag1918" onclick="CopyToClipboard('tag1918');return false;" class="tag-decoration">release-v0.24.2173</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/8d971c0b8417eb5a9c3277f0dcad5d24d564e10c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28697323355" target="_blank">2026-07-04 06:12:04</a></td></tr>
<tr><td><div id="tag23815" onclick="CopyToClipboard('tag23815');return false;" class="tag-decoration">testing</div><div id="tag23793" onclick="CopyToClipboard('tag23793');return false;" class="tag-decoration">testing-baf9d65</div><div id="tag25777" onclick="CopyToClipboard('tag25777');return false;" class="tag-decoration">testing-0.24.2173</div><div id="tag7730" onclick="CopyToClipboard('tag7730');return false;" class="tag-decoration">testing-v0</div><div id="tag13277" onclick="CopyToClipboard('tag13277');return false;" class="tag-decoration">testing-v0.24</div><div id="tag24443" onclick="CopyToClipboard('tag24443');return false;" class="tag-decoration">testing-v0.24.2173</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/baf9d6578556d812f2b8d811a46b9f0b9bdf9737" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28697323207" target="_blank">2026-07-04 06:12:03</a></td></tr>
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
