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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2759" onclick="CopyToClipboard('tag2759');return false;" class="tag-decoration">release</div><div id="tag2228" onclick="CopyToClipboard('tag2228');return false;" class="tag-decoration">release-ff8f3b0</div><div id="tag22048" onclick="CopyToClipboard('tag22048');return false;" class="tag-decoration">release-0.24.2219</div><div id="tag11360" onclick="CopyToClipboard('tag11360');return false;" class="tag-decoration">release-v0</div><div id="tag25969" onclick="CopyToClipboard('tag25969');return false;" class="tag-decoration">release-v0.24</div><div id="tag31645" onclick="CopyToClipboard('tag31645');return false;" class="tag-decoration">release-v0.24.2219</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/ff8f3b07bb1273521d109d78370bbe21b4d52c0f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29396345992" target="_blank">2026-07-15 07:07:54</a></td></tr>
<tr><td><div id="tag11119" onclick="CopyToClipboard('tag11119');return false;" class="tag-decoration">testing</div><div id="tag29968" onclick="CopyToClipboard('tag29968');return false;" class="tag-decoration">testing-8543a90</div><div id="tag1473" onclick="CopyToClipboard('tag1473');return false;" class="tag-decoration">testing-0.24.2219</div><div id="tag3479" onclick="CopyToClipboard('tag3479');return false;" class="tag-decoration">testing-v0</div><div id="tag18749" onclick="CopyToClipboard('tag18749');return false;" class="tag-decoration">testing-v0.24</div><div id="tag4798" onclick="CopyToClipboard('tag4798');return false;" class="tag-decoration">testing-v0.24.2219</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/8543a90748b64461471bd3061267e5cbb9362cea" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29396344198" target="_blank">2026-07-15 07:07:53</a></td></tr>
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
