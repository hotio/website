---
hide:
  - toc
title: hotio/tautulli
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/tautulli){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/tautulli){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/tautulli/tautulli){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11270" onclick="CopyToClipboard('tag11270');return false;" class="tag-decoration">release</div><div id="tag20492" onclick="CopyToClipboard('tag20492');return false;" class="tag-decoration">release-22a076c</div><div id="tag21898" onclick="CopyToClipboard('tag21898');return false;" class="tag-decoration">release-2.17.0</div><div id="tag26971" onclick="CopyToClipboard('tag26971');return false;" class="tag-decoration">release-v2</div><div id="tag29367" onclick="CopyToClipboard('tag29367');return false;" class="tag-decoration">release-v2.17</div><div id="tag19624" onclick="CopyToClipboard('tag19624');return false;" class="tag-decoration">release-v2.17.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/22a076c04fc8956f96135569cb6c2bbbe81c69d2" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/24552148658" target="_blank">2026-04-17 06:54:38</a></td></tr>
<tr><td><div id="tag15893" onclick="CopyToClipboard('tag15893');return false;" class="tag-decoration">testing</div><div id="tag11401" onclick="CopyToClipboard('tag11401');return false;" class="tag-decoration">testing-5d2d14d</div><div id="tag19255" onclick="CopyToClipboard('tag19255');return false;" class="tag-decoration">testing-2.17.0</div><div id="tag15543" onclick="CopyToClipboard('tag15543');return false;" class="tag-decoration">testing-v2</div><div id="tag20956" onclick="CopyToClipboard('tag20956');return false;" class="tag-decoration">testing-v2.17</div><div id="tag10223" onclick="CopyToClipboard('tag10223');return false;" class="tag-decoration">testing-v2.17.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/5d2d14dc88f6dd29da931f24ac65476470c6231d" target="_blank">Version update: 2.16.1 => 2.17.0</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/23675654944" target="_blank">2026-03-28 02:39:07</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="tautulli" \
        -p 8181:8181 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8181/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      tautulli:
        container_name: tautulli
        image: ghcr.io/hotio/tautulli
        ports:
          - "8181:8181"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8181/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
