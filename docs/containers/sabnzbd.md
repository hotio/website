---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag1992" onclick="CopyToClipboard('tag1992');return false;" class="tag-decoration">nightly</div><div id="tag1587" onclick="CopyToClipboard('tag1587');return false;" class="tag-decoration">nightly-543e245</div><div id="tag14812" onclick="CopyToClipboard('tag14812');return false;" class="tag-decoration">nightly-4a999a19081b76cff813b1c0e13bfea2234f314a</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/543e245cca2f3927236f4d92a4ead60488940e22" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33556160831" target="_blank">2026-09-01 20:34:56</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10163" onclick="CopyToClipboard('tag10163');return false;" class="tag-decoration">release</div><div id="tag2651" onclick="CopyToClipboard('tag2651');return false;" class="tag-decoration">release-1e8d0df</div><div id="tag23202" onclick="CopyToClipboard('tag23202');return false;" class="tag-decoration">release-5.1.2</div><div id="tag20325" onclick="CopyToClipboard('tag20325');return false;" class="tag-decoration">release-v5</div><div id="tag17136" onclick="CopyToClipboard('tag17136');return false;" class="tag-decoration">release-v5.1</div><div id="tag4418" onclick="CopyToClipboard('tag4418');return false;" class="tag-decoration">release-v5.1.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/1e8d0dfd274b77fceb7660a38429abc6192de8fc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33585220148" target="_blank">2026-09-02 02:58:16</a></td></tr>
<tr><td><div id="tag7372" onclick="CopyToClipboard('tag7372');return false;" class="tag-decoration">testing</div><div id="tag12233" onclick="CopyToClipboard('tag12233');return false;" class="tag-decoration">testing-9a894e1</div><div id="tag12384" onclick="CopyToClipboard('tag12384');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag8010" onclick="CopyToClipboard('tag8010');return false;" class="tag-decoration">testing-v5</div><div id="tag10816" onclick="CopyToClipboard('tag10816');return false;" class="tag-decoration">testing-v5.1</div><div id="tag31691" onclick="CopyToClipboard('tag31691');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/9a894e1f08965267e53b90045289c49a579e7f5c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33585225832" target="_blank">2026-09-02 02:58:22</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
