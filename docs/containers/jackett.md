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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32492" onclick="CopyToClipboard('tag32492');return false;" class="tag-decoration">release</div><div id="tag11081" onclick="CopyToClipboard('tag11081');return false;" class="tag-decoration">release-79296bb</div><div id="tag24552" onclick="CopyToClipboard('tag24552');return false;" class="tag-decoration">release-0.24.1044</div><div id="tag31344" onclick="CopyToClipboard('tag31344');return false;" class="tag-decoration">release-v0</div><div id="tag22865" onclick="CopyToClipboard('tag22865');return false;" class="tag-decoration">release-v0.24</div><div id="tag12325" onclick="CopyToClipboard('tag12325');return false;" class="tag-decoration">release-v0.24.1044</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/79296bb5c210916744c7350e76811a8a049efb05" target="_blank">Version update: 0.24.1032 => 0.24.1044</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21740452224" target="_blank">2026-02-06 05:57:03</a></td></tr>
<tr><td><div id="tag11968" onclick="CopyToClipboard('tag11968');return false;" class="tag-decoration">testing</div><div id="tag7588" onclick="CopyToClipboard('tag7588');return false;" class="tag-decoration">testing-8d9ef35</div><div id="tag25351" onclick="CopyToClipboard('tag25351');return false;" class="tag-decoration">testing-0.24.1032</div><div id="tag15086" onclick="CopyToClipboard('tag15086');return false;" class="tag-decoration">testing-v0</div><div id="tag32639" onclick="CopyToClipboard('tag32639');return false;" class="tag-decoration">testing-v0.24</div><div id="tag22917" onclick="CopyToClipboard('tag22917');return false;" class="tag-decoration">testing-v0.24.1032</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/8d9ef35daf0d68700ed97c580ed1e5aa25cd467a" target="_blank">Version update: 0.24.1027 => 0.24.1032</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21700842271" target="_blank">2026-02-05 06:06:04</a></td></tr>
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
