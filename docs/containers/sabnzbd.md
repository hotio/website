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
<tr><td><div id="tag10157" onclick="CopyToClipboard('tag10157');return false;" class="tag-decoration">nightly</div><div id="tag11615" onclick="CopyToClipboard('tag11615');return false;" class="tag-decoration">nightly-098cf67</div><div id="tag24504" onclick="CopyToClipboard('tag24504');return false;" class="tag-decoration">nightly-b18cdc38f8d6f7121d7d053fe4cff3aeae0009e8</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/098cf674060fd87d1d86a96bd46fa5cb03b90730" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34467199947" target="_blank">2026-09-10 10:39:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17077" onclick="CopyToClipboard('tag17077');return false;" class="tag-decoration">release</div><div id="tag21236" onclick="CopyToClipboard('tag21236');return false;" class="tag-decoration">release-ba20b35</div><div id="tag9321" onclick="CopyToClipboard('tag9321');return false;" class="tag-decoration">release-5.1.3</div><div id="tag24853" onclick="CopyToClipboard('tag24853');return false;" class="tag-decoration">release-v5</div><div id="tag7017" onclick="CopyToClipboard('tag7017');return false;" class="tag-decoration">release-v5.1</div><div id="tag30411" onclick="CopyToClipboard('tag30411');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/ba20b353cdd97b82838713108ed3c770f53f5f39" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34423198405" target="_blank">2026-09-10 00:53:24</a></td></tr>
<tr><td><div id="tag22929" onclick="CopyToClipboard('tag22929');return false;" class="tag-decoration">testing</div><div id="tag22645" onclick="CopyToClipboard('tag22645');return false;" class="tag-decoration">testing-a5201e9</div><div id="tag1999" onclick="CopyToClipboard('tag1999');return false;" class="tag-decoration">testing-5.1.3</div><div id="tag16099" onclick="CopyToClipboard('tag16099');return false;" class="tag-decoration">testing-v5</div><div id="tag26663" onclick="CopyToClipboard('tag26663');return false;" class="tag-decoration">testing-v5.1</div><div id="tag18390" onclick="CopyToClipboard('tag18390');return false;" class="tag-decoration">testing-v5.1.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a5201e938c73c5c7b035a089ce14c723bcceb237" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34423185997" target="_blank">2026-09-10 00:53:14</a></td></tr>
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
