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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20865" onclick="CopyToClipboard('tag20865');return false;" class="tag-decoration">release</div><div id="tag18872" onclick="CopyToClipboard('tag18872');return false;" class="tag-decoration">release-4e4a800</div><div id="tag12379" onclick="CopyToClipboard('tag12379');return false;" class="tag-decoration">release-0.24.1795</div><div id="tag22131" onclick="CopyToClipboard('tag22131');return false;" class="tag-decoration">release-v0</div><div id="tag18057" onclick="CopyToClipboard('tag18057');return false;" class="tag-decoration">release-v0.24</div><div id="tag7332" onclick="CopyToClipboard('tag7332');return false;" class="tag-decoration">release-v0.24.1795</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/4e4a8006af414af897b657196bc0adf20501cc16" target="_blank">Version update: 0.24.1789 => 0.24.1795</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25096282955" target="_blank">2026-04-29 07:26:53</a></td></tr>
<tr><td><div id="tag3747" onclick="CopyToClipboard('tag3747');return false;" class="tag-decoration">testing</div><div id="tag22391" onclick="CopyToClipboard('tag22391');return false;" class="tag-decoration">testing-7abed17</div><div id="tag26812" onclick="CopyToClipboard('tag26812');return false;" class="tag-decoration">testing-0.24.1795</div><div id="tag21147" onclick="CopyToClipboard('tag21147');return false;" class="tag-decoration">testing-v0</div><div id="tag3319" onclick="CopyToClipboard('tag3319');return false;" class="tag-decoration">testing-v0.24</div><div id="tag23742" onclick="CopyToClipboard('tag23742');return false;" class="tag-decoration">testing-v0.24.1795</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/7abed17e82469da7b04100d53659e85b2e6ec324" target="_blank">Version update: 0.24.1789 => 0.24.1795</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25096283853" target="_blank">2026-04-29 07:26:55</a></td></tr>
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
