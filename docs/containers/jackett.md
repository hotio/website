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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18605" onclick="CopyToClipboard('tag18605');return false;" class="tag-decoration">release</div><div id="tag32689" onclick="CopyToClipboard('tag32689');return false;" class="tag-decoration">release-937ef79</div><div id="tag6273" onclick="CopyToClipboard('tag6273');return false;" class="tag-decoration">release-0.24.879</div><div id="tag26998" onclick="CopyToClipboard('tag26998');return false;" class="tag-decoration">release-v0</div><div id="tag9" onclick="CopyToClipboard('tag9');return false;" class="tag-decoration">release-v0.24</div><div id="tag6405" onclick="CopyToClipboard('tag6405');return false;" class="tag-decoration">release-v0.24.879</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/937ef790ff1d13f5beebaedcdd533a3ecab08281" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21124036764" target="_blank">2026-01-19 03:13:11</a></td></tr>
<tr><td><div id="tag17026" onclick="CopyToClipboard('tag17026');return false;" class="tag-decoration">testing</div><div id="tag20449" onclick="CopyToClipboard('tag20449');return false;" class="tag-decoration">testing-f5df6ef</div><div id="tag15471" onclick="CopyToClipboard('tag15471');return false;" class="tag-decoration">testing-0.24.879</div><div id="tag32169" onclick="CopyToClipboard('tag32169');return false;" class="tag-decoration">testing-v0</div><div id="tag32290" onclick="CopyToClipboard('tag32290');return false;" class="tag-decoration">testing-v0.24</div><div id="tag16881" onclick="CopyToClipboard('tag16881');return false;" class="tag-decoration">testing-v0.24.879</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/f5df6ef70c64aee296128f57df462cfc7a792edf" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21124037102" target="_blank">2026-01-19 03:13:12</a></td></tr>
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
