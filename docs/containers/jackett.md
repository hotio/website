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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26175" onclick="CopyToClipboard('tag26175');return false;" class="tag-decoration">release</div><div id="tag1642" onclick="CopyToClipboard('tag1642');return false;" class="tag-decoration">release-a90eee8</div><div id="tag11243" onclick="CopyToClipboard('tag11243');return false;" class="tag-decoration">release-0.24.1985</div><div id="tag23574" onclick="CopyToClipboard('tag23574');return false;" class="tag-decoration">release-v0</div><div id="tag12860" onclick="CopyToClipboard('tag12860');return false;" class="tag-decoration">release-v0.24</div><div id="tag26351" onclick="CopyToClipboard('tag26351');return false;" class="tag-decoration">release-v0.24.1985</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/a90eee86e503ab07d11504ab073cb79bbd22edbb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26705833208" target="_blank">2026-05-31 06:52:50</a></td></tr>
<tr><td><div id="tag15324" onclick="CopyToClipboard('tag15324');return false;" class="tag-decoration">testing</div><div id="tag10234" onclick="CopyToClipboard('tag10234');return false;" class="tag-decoration">testing-b91397a</div><div id="tag31304" onclick="CopyToClipboard('tag31304');return false;" class="tag-decoration">testing-0.24.1985</div><div id="tag13823" onclick="CopyToClipboard('tag13823');return false;" class="tag-decoration">testing-v0</div><div id="tag5913" onclick="CopyToClipboard('tag5913');return false;" class="tag-decoration">testing-v0.24</div><div id="tag6892" onclick="CopyToClipboard('tag6892');return false;" class="tag-decoration">testing-v0.24.1985</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/b91397a525f539deaf30ed28a495393fbe68b2a3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26705832924" target="_blank">2026-05-31 06:52:49</a></td></tr>
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
