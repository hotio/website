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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24857" onclick="CopyToClipboard('tag24857');return false;" class="tag-decoration">release</div><div id="tag6613" onclick="CopyToClipboard('tag6613');return false;" class="tag-decoration">release-0ad5a72</div><div id="tag20385" onclick="CopyToClipboard('tag20385');return false;" class="tag-decoration">release-8.8.4</div><div id="tag5312" onclick="CopyToClipboard('tag5312');return false;" class="tag-decoration">release-v8</div><div id="tag15063" onclick="CopyToClipboard('tag15063');return false;" class="tag-decoration">release-v8.8</div><div id="tag32335" onclick="CopyToClipboard('tag32335');return false;" class="tag-decoration">release-v8.8.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/0ad5a721a0abea9d295ac3e1a22f8cb28691d6c0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/28398702932" target="_blank">2026-06-29 19:54:43</a></td></tr>
<tr><td><div id="tag21406" onclick="CopyToClipboard('tag21406');return false;" class="tag-decoration">testing</div><div id="tag7075" onclick="CopyToClipboard('tag7075');return false;" class="tag-decoration">testing-8fea0ed</div><div id="tag8930" onclick="CopyToClipboard('tag8930');return false;" class="tag-decoration">testing-8.8.5</div><div id="tag23547" onclick="CopyToClipboard('tag23547');return false;" class="tag-decoration">testing-v8</div><div id="tag19714" onclick="CopyToClipboard('tag19714');return false;" class="tag-decoration">testing-v8.8</div><div id="tag22645" onclick="CopyToClipboard('tag22645');return false;" class="tag-decoration">testing-v8.8.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/8fea0ed26beaf49356caa0740c0d3f993868d12d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/28403690220" target="_blank">2026-06-29 21:25:08</a></td></tr>
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
