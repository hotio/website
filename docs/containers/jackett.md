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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12877" onclick="CopyToClipboard('tag12877');return false;" class="tag-decoration">release</div><div id="tag17431" onclick="CopyToClipboard('tag17431');return false;" class="tag-decoration">release-57eec42</div><div id="tag14180" onclick="CopyToClipboard('tag14180');return false;" class="tag-decoration">release-0.25.39</div><div id="tag10298" onclick="CopyToClipboard('tag10298');return false;" class="tag-decoration">release-v0</div><div id="tag12523" onclick="CopyToClipboard('tag12523');return false;" class="tag-decoration">release-v0.25</div><div id="tag13498" onclick="CopyToClipboard('tag13498');return false;" class="tag-decoration">release-v0.25.39</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/57eec420cd98383d89eb04ebc511d45ecc4e5970" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/45608800686" target="_blank">2026-11-25 11:54:46</a></td></tr>
<tr><td><div id="tag2105" onclick="CopyToClipboard('tag2105');return false;" class="tag-decoration">testing</div><div id="tag15476" onclick="CopyToClipboard('tag15476');return false;" class="tag-decoration">testing-05291c1</div><div id="tag22526" onclick="CopyToClipboard('tag22526');return false;" class="tag-decoration">testing-0.25.39</div><div id="tag32350" onclick="CopyToClipboard('tag32350');return false;" class="tag-decoration">testing-v0</div><div id="tag7931" onclick="CopyToClipboard('tag7931');return false;" class="tag-decoration">testing-v0.25</div><div id="tag855" onclick="CopyToClipboard('tag855');return false;" class="tag-decoration">testing-v0.25.39</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/05291c1608aab7ff3e3c88450e1c213e00dcf3c1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/45608800122" target="_blank">2026-11-25 11:54:46</a></td></tr>
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
