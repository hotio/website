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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22311" onclick="CopyToClipboard('tag22311');return false;" class="tag-decoration">release</div><div id="tag13021" onclick="CopyToClipboard('tag13021');return false;" class="tag-decoration">release-1bb355f</div><div id="tag19703" onclick="CopyToClipboard('tag19703');return false;" class="tag-decoration">release-0.24.2651</div><div id="tag28093" onclick="CopyToClipboard('tag28093');return false;" class="tag-decoration">release-v0</div><div id="tag2625" onclick="CopyToClipboard('tag2625');return false;" class="tag-decoration">release-v0.24</div><div id="tag22906" onclick="CopyToClipboard('tag22906');return false;" class="tag-decoration">release-v0.24.2651</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/1bb355f15658c5b4e65af83841ad0c96f538531e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35829687553" target="_blank">2026-09-23 07:02:53</a></td></tr>
<tr><td><div id="tag19467" onclick="CopyToClipboard('tag19467');return false;" class="tag-decoration">testing</div><div id="tag23801" onclick="CopyToClipboard('tag23801');return false;" class="tag-decoration">testing-7efaaf2</div><div id="tag17109" onclick="CopyToClipboard('tag17109');return false;" class="tag-decoration">testing-0.24.2651</div><div id="tag16831" onclick="CopyToClipboard('tag16831');return false;" class="tag-decoration">testing-v0</div><div id="tag14364" onclick="CopyToClipboard('tag14364');return false;" class="tag-decoration">testing-v0.24</div><div id="tag16729" onclick="CopyToClipboard('tag16729');return false;" class="tag-decoration">testing-v0.24.2651</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/7efaaf2c88e3b65c1fca01ffd714194cb57cde65" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35937017534" target="_blank">2026-09-24 00:08:19</a></td></tr>
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
