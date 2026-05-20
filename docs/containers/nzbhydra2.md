---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9044" onclick="CopyToClipboard('tag9044');return false;" class="tag-decoration">release</div><div id="tag1968" onclick="CopyToClipboard('tag1968');return false;" class="tag-decoration">release-e2b7aa3</div><div id="tag9348" onclick="CopyToClipboard('tag9348');return false;" class="tag-decoration">release-8.8.1</div><div id="tag31243" onclick="CopyToClipboard('tag31243');return false;" class="tag-decoration">release-v8</div><div id="tag24788" onclick="CopyToClipboard('tag24788');return false;" class="tag-decoration">release-v8.8</div><div id="tag18265" onclick="CopyToClipboard('tag18265');return false;" class="tag-decoration">release-v8.8.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/e2b7aa3106eec44c1a4ff5f59715147638bbc013" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/26175695483" target="_blank">2026-05-20 16:25:00</a></td></tr>
<tr><td><div id="tag22756" onclick="CopyToClipboard('tag22756');return false;" class="tag-decoration">testing</div><div id="tag2029" onclick="CopyToClipboard('tag2029');return false;" class="tag-decoration">testing-bf09ac4</div><div id="tag27612" onclick="CopyToClipboard('tag27612');return false;" class="tag-decoration">testing-8.8.1</div><div id="tag32345" onclick="CopyToClipboard('tag32345');return false;" class="tag-decoration">testing-v8</div><div id="tag2394" onclick="CopyToClipboard('tag2394');return false;" class="tag-decoration">testing-v8.8</div><div id="tag3928" onclick="CopyToClipboard('tag3928');return false;" class="tag-decoration">testing-v8.8.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/bf09ac48d251b9ca824f2897dc0eb9d18977b278" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/25986602142" target="_blank">2026-05-17 09:03:44</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
